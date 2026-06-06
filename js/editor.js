/**
 * MarkFlow Studio - Editor Module
 * Handles editor initialization, keyboard shortcuts, file operations,
 * auto-save, scroll sync, and find/replace functionality.
 */

'use strict';

const MarkFlowEditor = (function () {

    // ========== State ==========
    let editorEl = null;
    let previewEl = null;
    let previewWrapperEl = null;
    let mainContentEl = null;
    let statusWordsEl = null;
    let statusLinesEl = null;
    let statusCharsEl = null;
    let statusSaveEl = null;
    let statusThemeEl = null;
    let statusModeEl = null;
    let findBarEl = null;
    let findInputEl = null;
    let replaceInputEl = null;
    let findCountEl = null;
    let fileInputEl = null;

    let currentFileName = 'untitled.md';
    let autoSaveTimer = null;
    let isModified = false;
    let currentView = 'split';
    let tabSize = 4;
    let autoSaveEnabled = true;
    let cjkSpacingEnabled = true;
    let scrollSyncEnabled = true;
    let fontSize = 16;

    // Find & Replace state
    let findMatches = [];
    let currentMatchIndex = -1;

    // ========== Initialization ==========

    /**
     * Initialize the editor module
     * @param {Object} config - Configuration object
     */
    function init(config) {
        config = config || {};

        // Cache DOM elements
        editorEl = document.getElementById('editor');
        previewEl = document.getElementById('preview');
        previewWrapperEl = document.getElementById('previewWrapper');
        mainContentEl = document.getElementById('mainContent');
        statusWordsEl = document.getElementById('statusWords');
        statusLinesEl = document.getElementById('statusLines');
        statusCharsEl = document.getElementById('statusChars');
        statusSaveEl = document.getElementById('statusSave');
        statusThemeEl = document.getElementById('statusTheme');
        statusModeEl = document.getElementById('statusMode');
        findBarEl = document.getElementById('findBar');
        findInputEl = document.getElementById('findInput');
        replaceInputEl = document.getElementById('replaceInput');
        findCountEl = document.getElementById('findCount');
        fileInputEl = document.getElementById('fileInput');

        // Apply settings from config
        tabSize = config.tabSize || 4;
        autoSaveEnabled = config.autoSave !== false;
        cjkSpacingEnabled = config.cjkSpacing !== false;
        scrollSyncEnabled = config.scrollSync !== false;
        fontSize = config.fontSize || 16;

        // Bind events
        bindEditorEvents();
        bindToolbarEvents();
        bindFileEvents();
        bindFindReplaceEvents();
        bindPanelResizer();

        // Set initial content
        if (config.initialContent) {
            setContent(config.initialContent);
        }

        // Initial render
        updatePreview();
        updateStats();
    }

    // ========== Editor Events ==========

    function bindEditorEvents() {
        // Input event: real-time preview update
        editorEl.addEventListener('input', function () {
            isModified = true;
            updatePreview();
            updateStats();
            scheduleAutoSave();
        });

        // Keydown event: Tab handling, shortcuts
        editorEl.addEventListener('keydown', function (e) {
            handleKeyDown(e);
        });

        // Scroll sync
        editorEl.addEventListener('scroll', function () {
            if (scrollSyncEnabled) {
                syncScroll('editor');
            }
        });
        previewWrapperEl.addEventListener('scroll', function () {
            if (scrollSyncEnabled) {
                syncScroll('preview');
            }
        });

        // Auto bracket completion
        editorEl.addEventListener('keypress', function (e) {
            handleAutoComplete(e);
        });
    }

    /**
     * Handle keyboard shortcuts and Tab key
     * @param {KeyboardEvent} e - The keyboard event
     */
    function handleKeyDown(e) {
        const ctrl = e.ctrlKey || e.metaKey;

        // Tab key: insert spaces
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            insertText(' '.repeat(tabSize));
            return;
        }

        // Shift+Tab: outdent
        if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            outdentLine();
            return;
        }

        // Ctrl+B: Bold
        if (ctrl && e.key === 'b') {
            e.preventDefault();
            wrapSelection('**', '**');
            return;
        }

        // Ctrl+I: Italic
        if (ctrl && e.key === 'i') {
            e.preventDefault();
            wrapSelection('*', '*');
            return;
        }

        // Ctrl+K: Insert link
        if (ctrl && e.key === 'k') {
            e.preventDefault();
            insertLink();
            return;
        }

        // Ctrl+S: Save
        if (ctrl && e.key === 's') {
            e.preventDefault();
            saveFile();
            return;
        }

        // Ctrl+N: New file
        if (ctrl && e.key === 'n') {
            e.preventDefault();
            newFile();
            return;
        }

        // Ctrl+O: Open file
        if (ctrl && e.key === 'o') {
            e.preventDefault();
            fileInputEl.click();
            return;
        }

        // Ctrl+H: Find & Replace
        if (ctrl && e.key === 'h') {
            e.preventDefault();
            toggleFindReplace();
            return;
        }

        // Ctrl+F: Find
        if (ctrl && e.key === 'f') {
            e.preventDefault();
            toggleFindReplace();
            return;
        }

        // Escape: Close find bar
        if (e.key === 'Escape') {
            closeFindReplace();
            return;
        }

        // Enter: auto-continue lists
        if (e.key === 'Enter' && !ctrl) {
            handleEnterKey(e);
            return;
        }
    }

    /**
     * Handle Enter key for list continuation
     * @param {KeyboardEvent} e - The keyboard event
     */
    function handleEnterKey(e) {
        const start = editorEl.selectionStart;
        const text = editorEl.value;
        const lineStart = text.lastIndexOf('\n', start - 1) + 1;
        const currentLine = text.substring(lineStart, start);

        // Check if current line is a list item
        const ulMatch = currentLine.match(/^(\s*)([-*+])\s/);
        const olMatch = currentLine.match(/^(\s*)(\d+)\.\s/);
        const taskMatch = currentLine.match(/^(\s*)([-*+])\s\[[ xX]\]\s/);

        if (taskMatch) {
            // Task list: continue with unchecked item
            e.preventDefault();
            const indent = taskMatch[1];
            const marker = taskMatch[2];
            const contentAfter = currentLine.replace(/^(\s*)([-*+])\s\[[ xX]\]\s(.*)/, '$3');
            if (contentAfter.trim() === '') {
                // Empty task item: remove it
                editorEl.value = text.substring(0, lineStart) + text.substring(start);
                editorEl.selectionStart = editorEl.selectionEnd = lineStart;
            } else {
                insertText('\n' + indent + marker + ' [ ] ');
            }
            triggerInput();
        } else if (ulMatch) {
            // Unordered list
            e.preventDefault();
            const indent = ulMatch[1];
            const marker = ulMatch[2];
            const contentAfter = currentLine.replace(/^(\s*)([-*+])\s(.*)/, '$3');
            if (contentAfter.trim() === '') {
                editorEl.value = text.substring(0, lineStart) + text.substring(start);
                editorEl.selectionStart = editorEl.selectionEnd = lineStart;
            } else {
                insertText('\n' + indent + marker + ' ');
            }
            triggerInput();
        } else if (olMatch) {
            // Ordered list
            e.preventDefault();
            const indent = olMatch[1];
            const num = parseInt(olMatch[2]) + 1;
            const contentAfter = currentLine.replace(/^(\s*)(\d+)\.\s(.*)/, '$3');
            if (contentAfter.trim() === '') {
                editorEl.value = text.substring(0, lineStart) + text.substring(start);
                editorEl.selectionStart = editorEl.selectionEnd = lineStart;
            } else {
                insertText('\n' + indent + num + '. ');
            }
            triggerInput();
        }
    }

    /**
     * Handle auto-completion of brackets and quotes
     * @param {KeyboardEvent} e - The keyboard event
     */
    function handleAutoComplete(e) {
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}',
            '"': '"',
            "'": "'",
            '`': '`'
        };

        const char = e.key;
        if (!pairs[char]) return;

        const start = editorEl.selectionStart;
        const end = editorEl.selectionEnd;
        const text = editorEl.value;

        // If text is selected, wrap it
        if (start !== end) {
            e.preventDefault();
            const selected = text.substring(start, end);
            const replacement = char + selected + pairs[char];
            editorEl.value = text.substring(0, start) + replacement + text.substring(end);
            editorEl.selectionStart = start + 1;
            editorEl.selectionEnd = end + 1;
            triggerInput();
        }
    }

    // ========== Text Manipulation ==========

    /**
     * Insert text at cursor position
     * @param {string} text - The text to insert
     */
    function insertText(text) {
        const start = editorEl.selectionStart;
        const end = editorEl.selectionEnd;
        const value = editorEl.value;

        editorEl.value = value.substring(0, start) + text + value.substring(end);
        editorEl.selectionStart = editorEl.selectionEnd = start + text.length;
        triggerInput();
    }

    /**
     * Wrap selected text with prefix and suffix
     * @param {string} prefix - The prefix string
     * @param {string} suffix - The suffix string
     */
    function wrapSelection(prefix, suffix) {
        const start = editorEl.selectionStart;
        const end = editorEl.selectionEnd;
        const value = editorEl.value;
        const selected = value.substring(start, end) || 'text';

        const newText = prefix + selected + suffix;
        editorEl.value = value.substring(0, start) + newText + value.substring(end);

        if (start === end) {
            // No selection: place cursor inside the wrapping
            editorEl.selectionStart = start + prefix.length;
            editorEl.selectionEnd = start + prefix.length + selected.length;
        } else {
            editorEl.selectionStart = start;
            editorEl.selectionEnd = start + newText.length;
        }
        triggerInput();
    }

    /**
     * Insert a Markdown link at cursor position
     */
    function insertLink() {
        const start = editorEl.selectionStart;
        const end = editorEl.selectionEnd;
        const value = editorEl.value;
        const selected = value.substring(start, end) || 'link text';

        const link = '[' + selected + '](url)';
        editorEl.value = value.substring(0, start) + link + value.substring(end);

        // Select the 'url' part
        editorEl.selectionStart = start + selected.length + 3;
        editorEl.selectionEnd = start + selected.length + 6;
        editorEl.focus();
        triggerInput();
    }

    /**
     * Outdent the current line
     */
    function outdentLine() {
        const start = editorEl.selectionStart;
        const value = editorEl.value;
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        const line = value.substring(lineStart);

        const spacesToRemove = Math.min(tabSize, line.length - line.trimStart().length);
        if (spacesToRemove > 0) {
            editorEl.value = value.substring(0, lineStart) + line.substring(spacesToRemove);
            editorEl.selectionStart = editorEl.selectionEnd = Math.max(lineStart, start - spacesToRemove);
            triggerInput();
        }
    }

    /**
     * Trigger the input event programmatically
     */
    function triggerInput() {
        editorEl.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // ========== Preview & Stats ==========

    /**
     * Update the preview panel with parsed Markdown
     */
    function updatePreview() {
        const markdown = editorEl.value;
        const html = MarkFlowParser.parse(markdown, {
            cjkSpacing: cjkSpacingEnabled,
            cjkIndent: cjkSpacingEnabled
        });
        previewEl.innerHTML = html;
    }

    /**
     * Update word/line/character statistics
     */
    function updateStats() {
        const text = editorEl.value;
        const stats = MarkFlowParser.countWords(text);

        statusWordsEl.textContent = 'Words: ' + stats.words;
        statusLinesEl.textContent = 'Lines: ' + stats.lines;
        statusCharsEl.textContent = 'Characters: ' + stats.characters;
    }

    // ========== Scroll Sync ==========

    /**
     * Synchronize scrolling between editor and preview
     * @param {string} source - The source panel ('editor' or 'preview')
     */
    function syncScroll(source) {
        if (source === 'editor') {
            const editorHeight = editorEl.scrollHeight - editorEl.clientHeight;
            const ratio = editorHeight > 0 ? editorEl.scrollTop / editorHeight : 0;
            previewWrapperEl.scrollTop = ratio * (previewWrapperEl.scrollHeight - previewWrapperEl.clientHeight);
        } else {
            const previewHeight = previewWrapperEl.scrollHeight - previewWrapperEl.clientHeight;
            const ratio = previewHeight > 0 ? previewWrapperEl.scrollTop / previewHeight : 0;
            editorEl.scrollTop = ratio * (editorEl.scrollHeight - editorEl.clientHeight);
        }
    }

    // ========== Auto Save ==========

    /**
     * Schedule an auto-save after a delay
     */
    function scheduleAutoSave() {
        if (!autoSaveEnabled) return;

        if (autoSaveTimer) {
            clearTimeout(autoSaveTimer);
        }

        statusSaveEl.textContent = 'Modified';
        statusSaveEl.classList.add('saving-indicator');

        autoSaveTimer = setTimeout(function () {
            saveToLocalStorage();
            statusSaveEl.textContent = 'Saved';
            statusSaveEl.classList.remove('saving-indicator');
            isModified = false;
        }, 1500);
    }

    /**
     * Save editor content to localStorage
     */
    function saveToLocalStorage() {
        try {
            localStorage.setItem('markflow-content', editorEl.value);
            localStorage.setItem('markflow-cursor', editorEl.selectionStart.toString());
        } catch (e) {
            // localStorage may be full or unavailable
            console.warn('Auto-save failed:', e);
        }
    }

    /**
     * Load editor content from localStorage
     * @returns {string|null} The saved content or null
     */
    function loadFromLocalStorage() {
        try {
            return localStorage.getItem('markflow-content');
        } catch (e) {
            return null;
        }
    }

    // ========== File Operations ==========

    function bindFileEvents() {
        fileInputEl.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (event) {
                editorEl.value = event.target.result;
                currentFileName = file.name;
                updatePreview();
                updateStats();
                scheduleAutoSave();
            };
            reader.readAsText(file);

            // Reset input so the same file can be opened again
            fileInputEl.value = '';
        });
    }

    /**
     * Create a new file
     */
    function newFile() {
        if (isModified) {
            if (!confirm('You have unsaved changes. Create a new file anyway?')) {
                return;
            }
        }
        editorEl.value = '';
        currentFileName = 'untitled.md';
        updatePreview();
        updateStats();
        editorEl.focus();
    }

    /**
     * Save file as Markdown download
     */
    function saveFile() {
        const content = editorEl.value;
        const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
        downloadBlob(blob, currentFileName);
        statusSaveEl.textContent = 'Saved';
        isModified = false;
    }

    /**
     * Export as HTML file
     */
    function exportHTML() {
        const content = editorEl.value;
        const htmlContent = MarkFlowParser.parse(content, {
            cjkSpacing: cjkSpacingEnabled,
            cjkIndent: cjkSpacingEnabled
        });

        const fullHtml = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n' +
            '<meta charset="UTF-8">\n' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            '<title>' + escapeHtml(currentFileName.replace(/\.md$/, '')) + '</title>\n' +
            '<style>\n' +
            'body { max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.8; color: #333; }\n' +
            'h1, h2 { border-bottom: 1px solid #eee; padding-bottom: 0.3em; }\n' +
            'code { background: #f4f4f8; padding: 0.2em 0.4em; border-radius: 3px; font-size: 0.9em; }\n' +
            'pre { background: #f8f8fc; padding: 16px; border-radius: 8px; overflow-x: auto; }\n' +
            'pre code { background: none; padding: 0; }\n' +
            'blockquote { border-left: 4px solid #4f6ef7; padding: 0.5em 1em; margin: 1em 0; background: #f8f8fc; }\n' +
            'table { border-collapse: collapse; width: 100%; }\n' +
            'th, td { border: 1px solid #ddd; padding: 8px 12px; }\n' +
            'th { background: #f5f5fa; }\n' +
            'img { max-width: 100%; }\n' +
            'mark { background: #fef08a; padding: 0.1em 0.3em; border-radius: 3px; }\n' +
            '.math-inline { background: #f0f0f8; padding: 0.1em 0.3em; border-radius: 3px; font-style: italic; }\n' +
            '.math-block { display: block; padding: 16px; background: #f0f0f8; border-radius: 8px; text-align: center; font-style: italic; }\n' +
            '.mermaid-block { padding: 16px; background: #f8f8fc; border: 1px dashed #ddd; border-radius: 8px; text-align: center; }\n' +
            '</style>\n</head>\n<body>\n' +
            htmlContent + '\n</body>\n</html>';

        const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
        downloadBlob(blob, currentFileName.replace(/\.md$/, '.html'));
    }

    /**
     * Export as PDF (using browser print dialog)
     */
    function exportPDF() {
        // Open preview in a new window for printing
        const content = editorEl.value;
        const htmlContent = MarkFlowParser.parse(content, {
            cjkSpacing: cjkSpacingEnabled,
            cjkIndent: cjkSpacingEnabled
        });

        const printWindow = window.open('', '_blank');
        printWindow.document.write(
            '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Print</title>' +
            '<style>body{max-width:800px;margin:0 auto;padding:40px 20px;font-family:sans-serif;line-height:1.8;color:#333}' +
            'h1,h2{border-bottom:1px solid #eee;padding-bottom:0.3em}' +
            'code{background:#f4f4f8;padding:0.2em 0.4em;border-radius:3px}' +
            'pre{background:#f8f8fc;padding:16px;border-radius:8px;overflow-x:auto}' +
            'pre code{background:none;padding:0}' +
            'blockquote{border-left:4px solid #4f6ef7;padding:0.5em 1em;margin:1em 0;background:#f8f8fc}' +
            'table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px 12px}' +
            'th{background:#f5f5fa}img{max-width:100%}' +
            '</style></head><body>' + htmlContent + '</body></html>'
        );
        printWindow.document.close();
        printWindow.onload = function () {
            printWindow.print();
        };
    }

    /**
     * Download a Blob as a file
     * @param {Blob} blob - The blob to download
     * @param {string} filename - The filename
     */
    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function escapeHtml(text) {
        return MarkFlowParser.escapeHtml(text);
    }

    // ========== Toolbar Events ==========

    function bindToolbarEvents() {
        // Format buttons
        document.getElementById('btnBold').addEventListener('click', function () {
            wrapSelection('**', '**');
            editorEl.focus();
        });

        document.getElementById('btnItalic').addEventListener('click', function () {
            wrapSelection('*', '*');
            editorEl.focus();
        });

        document.getElementById('btnStrikethrough').addEventListener('click', function () {
            wrapSelection('~~', '~~');
            editorEl.focus();
        });

        document.getElementById('btnHeading').addEventListener('click', function () {
            insertAtLineStart('## ');
            editorEl.focus();
        });

        document.getElementById('btnList').addEventListener('click', function () {
            insertAtLineStart('- ');
            editorEl.focus();
        });

        document.getElementById('btnTaskList').addEventListener('click', function () {
            insertAtLineStart('- [ ] ');
            editorEl.focus();
        });

        document.getElementById('btnCode').addEventListener('click', function () {
            wrapSelection('```\n', '\n```');
            editorEl.focus();
        });

        document.getElementById('btnTable').addEventListener('click', function () {
            insertText('\n| Header 1 | Header 2 | Header 3 |\n| --- | --- | --- |\n| Cell 1 | Cell 2 | Cell 3 |\n| Cell 4 | Cell 5 | Cell 6 |\n');
            editorEl.focus();
        });

        document.getElementById('btnFormula').addEventListener('click', function () {
            insertText('$E = mc^2$');
            editorEl.focus();
        });

        document.getElementById('btnMermaid').addEventListener('click', function () {
            insertText('\n```mermaid\ngraph TD\n    A[Start] --> B[Process]\n    B --> C[End]\n```\n');
            editorEl.focus();
        });

        document.getElementById('btnQuote').addEventListener('click', function () {
            insertAtLineStart('> ');
            editorEl.focus();
        });

        document.getElementById('btnLink').addEventListener('click', function () {
            insertLink();
        });

        document.getElementById('btnImage').addEventListener('click', function () {
            insertText('![alt text](image-url)');
            editorEl.focus();
        });

        document.getElementById('btnHr').addEventListener('click', function () {
            insertText('\n---\n');
            editorEl.focus();
        });

        // Export dropdown
        const exportBtn = document.getElementById('btnExport');
        const exportMenu = document.getElementById('exportMenu');
        exportBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            exportMenu.classList.toggle('show');
        });

        document.querySelectorAll('#exportMenu .dropdown-item').forEach(function (item) {
            item.addEventListener('click', function () {
                const type = this.getAttribute('data-export');
                exportMenu.classList.remove('show');

                switch (type) {
                    case 'md': saveFile(); break;
                    case 'html': exportHTML(); break;
                    case 'pdf': exportPDF(); break;
                }
            });
        });

        // Close dropdown on outside click
        document.addEventListener('click', function () {
            exportMenu.classList.remove('show');
        });

        // Copy HTML button
        document.getElementById('btnCopyHtml').addEventListener('click', function () {
            const html = previewEl.innerHTML;
            navigator.clipboard.writeText(html).then(function () {
                const btn = document.getElementById('btnCopyHtml');
                const origTitle = btn.getAttribute('title');
                btn.setAttribute('title', 'Copied!');
                setTimeout(function () {
                    btn.setAttribute('title', origTitle);
                }, 1500);
            });
        });

        // Find & Replace button
        document.getElementById('btnFindReplace').addEventListener('click', toggleFindReplace);
    }

    /**
     * Insert text at the beginning of the current line
     * @param {string} prefix - The text to insert
     */
    function insertAtLineStart(prefix) {
        const start = editorEl.selectionStart;
        const value = editorEl.value;
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;

        editorEl.value = value.substring(0, lineStart) + prefix + value.substring(lineStart);
        editorEl.selectionStart = editorEl.selectionEnd = lineStart + prefix.length;
        triggerInput();
    }

    // ========== Find & Replace ==========

    function bindFindReplaceEvents() {
        document.getElementById('btnFindClose').addEventListener('click', closeFindReplace);

        findInputEl.addEventListener('input', function () {
            performFind();
        });

        findInputEl.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (e.shiftKey) {
                    findPrev();
                } else {
                    findNext();
                }
            }
        });

        document.getElementById('btnFindNext').addEventListener('click', findNext);
        document.getElementById('btnFindPrev').addEventListener('click', findPrev);

        document.getElementById('btnReplace').addEventListener('click', function () {
            replaceCurrent();
        });

        document.getElementById('btnReplaceAll').addEventListener('click', function () {
            replaceAll();
        });
    }

    function toggleFindReplace() {
        if (findBarEl.style.display === 'none') {
            findBarEl.style.display = 'flex';
            findInputEl.focus();
            findInputEl.select();
        } else {
            closeFindReplace();
        }
    }

    function closeFindReplace() {
        findBarEl.style.display = 'none';
        findMatches = [];
        currentMatchIndex = -1;
        findCountEl.textContent = '0';
        editorEl.focus();
    }

    function performFind() {
        const query = findInputEl.value;
        findMatches = [];
        currentMatchIndex = -1;

        if (!query) {
            findCountEl.textContent = '0';
            return;
        }

        const text = editorEl.value;
        let idx = text.indexOf(query);
        while (idx !== -1) {
            findMatches.push(idx);
            idx = text.indexOf(query, idx + 1);
        }

        findCountEl.textContent = findMatches.length.toString();

        if (findMatches.length > 0) {
            currentMatchIndex = 0;
            highlightMatch();
        }
    }

    function findNext() {
        if (findMatches.length === 0) return;
        currentMatchIndex = (currentMatchIndex + 1) % findMatches.length;
        highlightMatch();
    }

    function findPrev() {
        if (findMatches.length === 0) return;
        currentMatchIndex = (currentMatchIndex - 1 + findMatches.length) % findMatches.length;
        highlightMatch();
    }

    function highlightMatch() {
        if (currentMatchIndex < 0 || currentMatchIndex >= findMatches.length) return;

        const pos = findMatches[currentMatchIndex];
        const query = findInputEl.value;
        editorEl.focus();
        editorEl.setSelectionRange(pos, pos + query.length);

        // Scroll to selection
        const lineHeight = parseInt(getComputedStyle(editorEl).lineHeight) || 24;
        const textBefore = editorEl.value.substring(0, pos);
        const lineNum = textBefore.split('\n').length;
        editorEl.scrollTop = (lineNum - 5) * lineHeight;
    }

    function replaceCurrent() {
        if (findMatches.length === 0 || currentMatchIndex < 0) return;

        const query = findInputEl.value;
        const replacement = replaceInputEl.value;
        const pos = findMatches[currentMatchIndex];

        editorEl.value = editorEl.value.substring(0, pos) + replacement +
            editorEl.value.substring(pos + query.length);
        triggerInput();
        performFind();
    }

    function replaceAll() {
        const query = findInputEl.value;
        const replacement = replaceInputEl.value;

        if (!query) return;

        editorEl.value = editorEl.value.split(query).join(replacement);
        triggerInput();
        performFind();
    }

    // ========== Panel Resizer ==========

    function bindPanelResizer() {
        const resizer = document.getElementById('panelResizer');
        let isResizing = false;
        let startX = 0;
        let startLeftWidth = 0;

        resizer.addEventListener('mousedown', function (e) {
            isResizing = true;
            startX = e.clientX;
            startLeftWidth = document.getElementById('editorPanel').offsetWidth;
            resizer.classList.add('active');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', function (e) {
            if (!isResizing) return;
            const dx = e.clientX - startX;
            const totalWidth = mainContentEl.offsetWidth;
            const newLeftWidth = Math.max(200, Math.min(totalWidth - 200, startLeftWidth + dx));

            const leftPanel = document.getElementById('editorPanel');
            const rightPanel = document.getElementById('previewPanel');
            const rightWidth = totalWidth - newLeftWidth - 4; // 4px for resizer

            leftPanel.style.flex = 'none';
            leftPanel.style.width = newLeftWidth + 'px';
            rightPanel.style.flex = 'none';
            rightPanel.style.width = rightWidth + 'px';
        });

        document.addEventListener('mouseup', function () {
            if (!isResizing) return;
            isResizing = false;
            resizer.classList.remove('active');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        });
    }

    // ========== View Management ==========

    /**
     * Switch view mode
     * @param {string} view - The view mode ('edit', 'preview', 'split', 'slideshow')
     */
    function setView(view) {
        currentView = view;

        // Remove all view classes
        mainContentEl.classList.remove('view-edit', 'view-preview', 'view-split');

        // Reset panel styles
        const leftPanel = document.getElementById('editorPanel');
        const rightPanel = document.getElementById('previewPanel');
        leftPanel.style.flex = '';
        leftPanel.style.width = '';
        rightPanel.style.flex = '';
        rightPanel.style.width = '';

        switch (view) {
            case 'edit':
                mainContentEl.classList.add('view-edit');
                statusModeEl.textContent = 'Edit Mode';
                break;
            case 'preview':
                mainContentEl.classList.add('view-preview');
                statusModeEl.textContent = 'Preview Mode';
                break;
            case 'split':
            default:
                mainContentEl.classList.add('view-split');
                statusModeEl.textContent = 'Split View';
                break;
        }

        // Update active button
        document.querySelectorAll('.view-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-view') === view);
        });
    }

    // ========== Content Management ==========

    /**
     * Set editor content
     * @param {string} content - The content to set
     */
    function setContent(content) {
        editorEl.value = content || '';
        updatePreview();
        updateStats();
    }

    /**
     * Get editor content
     * @returns {string} The editor content
     */
    function getContent() {
        return editorEl.value;
    }

    /**
     * Get the current file name
     * @returns {string} The file name
     */
    function getFileName() {
        return currentFileName;
    }

    /**
     * Update settings
     * @param {Object} settings - The settings to update
     */
    function updateSettings(settings) {
        if (settings.tabSize !== undefined) tabSize = settings.tabSize;
        if (settings.autoSave !== undefined) autoSaveEnabled = settings.autoSave;
        if (settings.cjkSpacing !== undefined) cjkSpacingEnabled = settings.cjkSpacing;
        if (settings.scrollSync !== undefined) scrollSyncEnabled = settings.scrollSync;
        if (settings.fontSize !== undefined) {
            fontSize = settings.fontSize;
            editorEl.style.fontSize = fontSize + 'px';
        }
        if (settings.editorFont !== undefined) {
            editorEl.style.fontFamily = settings.editorFont;
        }
    }

    /**
     * Get the preview HTML
     * @returns {string} The preview HTML
     */
    function getPreviewHTML() {
        return previewEl.innerHTML;
    }

    // ========== Public API ==========
    return {
        init: init,
        setContent: setContent,
        getContent: getContent,
        getFileName: getFileName,
        setView: setView,
        updateSettings: updateSettings,
        updatePreview: updatePreview,
        newFile: newFile,
        saveFile: saveFile,
        exportHTML: exportHTML,
        exportPDF: exportPDF,
        loadFromLocalStorage: loadFromLocalStorage,
        getPreviewHTML: getPreviewHTML
    };

})();
