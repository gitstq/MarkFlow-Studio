/**
 * MarkFlow Studio - Markdown Parser Engine
 * A pure JavaScript Markdown parser with zero dependencies.
 * Supports standard Markdown, GFM extensions, math formulas, Mermaid charts,
 * highlight marks, sub/superscript, and CJK typography optimizations.
 */

'use strict';

const MarkFlowParser = (function () {

    // ========== XSS Sanitization ==========
    // Escape HTML special characters to prevent XSS attacks
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return text.replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    }

    // Sanitize URL protocols to prevent javascript: injection
    function sanitizeUrl(url) {
        const trimmed = url.trim().toLowerCase();
        if (
            trimmed.startsWith('javascript:') ||
            trimmed.startsWith('data:text/html') ||
            trimmed.startsWith('vbscript:')
        ) {
            return '#unsafe-url';
        }
        return url;
    }

    // ========== Code Syntax Highlighter ==========
    // Simple keyword-based syntax highlighter for common languages
    const syntaxRules = {
        // Common keywords across languages
        keywords: [
            'function', 'const', 'let', 'var', 'if', 'else', 'for', 'while',
            'do', 'switch', 'case', 'break', 'continue', 'return', 'class',
            'extends', 'new', 'this', 'super', 'import', 'export', 'default',
            'from', 'async', 'await', 'try', 'catch', 'finally', 'throw',
            'typeof', 'instanceof', 'in', 'of', 'void', 'delete', 'yield',
            'def', 'print', 'self', 'True', 'False', 'None', 'lambda',
            'elif', 'pass', 'raise', 'with', 'as', 'global', 'nonlocal',
            'assert', 'int', 'float', 'str', 'bool', 'list', 'dict', 'set',
            'tuple', 'public', 'private', 'protected', 'static', 'final',
            'abstract', 'interface', 'implements', 'package', 'enum',
            'struct', 'typedef', 'sizeof', 'include', 'require', 'module',
            'use', 'fn', 'mut', 'impl', 'trait', 'pub', 'mod', 'crate',
            'match', 'loop', 'move', 'ref', 'type', 'where', 'unsafe'
        ],
        // Type-like words
        types: [
            'string', 'number', 'boolean', 'object', 'array', 'null', 'undefined',
            'Symbol', 'BigInt', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet',
            'Error', 'RegExp', 'Date', 'JSON', 'Math', 'console', 'window',
            'document', 'parseInt', 'parseFloat', 'isNaN', 'isFinite',
            'String', 'Number', 'Boolean', 'Object', 'Array', 'Function',
            'int', 'float', 'double', 'char', 'byte', 'long', 'short',
            'unsigned', 'signed', 'void', 'auto', 'bool', 'true', 'false'
        ]
    };

    function highlightCode(code, language) {
        // Escape HTML first
        let escaped = escapeHtml(code);

        // Build regex patterns
        const patterns = [];

        // Comments (single-line and multi-line)
        if (language === 'python' || language === 'py') {
            patterns.push({ regex: /#(?!.*\[)([^\n]*)/g, cls: 'code-comment' });
        } else if (language === 'html' || language === 'xml') {
            patterns.push({ regex: /&lt;!--[\s\S]*?--&gt;/g, cls: 'code-comment' });
        } else if (language === 'css') {
            patterns.push({ regex: /\/\*[\s\S]*?\*\//g, cls: 'code-comment' });
        } else {
            patterns.push({ regex: /\/\/(?!.*\[)([^\n]*)/g, cls: 'code-comment' });
            patterns.push({ regex: /\/\*[\s\S]*?\*\//g, cls: 'code-comment' });
        }

        // Strings (double and single quotes)
        patterns.push({ regex: /(&quot;)([^&]*?)(&quot;)/g, cls: 'code-string' });
        patterns.push({ regex: /"([^"\\]|\\.)*"/g, cls: 'code-string' });
        patterns.push({ regex: /'([^'\\]|\\.)*'/g, cls: 'code-string' });
        patterns.push({ regex: /`([^`\\]|\\.)*`/g, cls: 'code-string' });

        // Numbers
        patterns.push({ regex: /\b(\d+\.?\d*([eE][+-]?\d+)?)\b/g, cls: 'code-number' });

        // Keywords
        const kwPattern = new RegExp(
            '\\b(' + syntaxRules.keywords.join('|') + ')\\b', 'g'
        );
        patterns.push({ regex: kwPattern, cls: 'code-keyword' });

        // Types
        const typePattern = new RegExp(
            '\\b(' + syntaxRules.types.join('|') + ')\\b', 'g'
        );
        patterns.push({ regex: typePattern, cls: 'code-type' });

        // Function calls
        patterns.push({ regex: /\b([a-zA-Z_]\w*)\s*(?=\()/g, cls: 'code-function' });

        // Apply highlighting with placeholder to avoid double-replacement
        let tokens = [];
        let tokenId = 0;

        function addToken(match, cls) {
            const id = '\x00TOKEN' + (tokenId++) + '\x00';
            tokens.push({ id: id, html: '<span class="' + cls + '">' + match + '</span>' });
            return id;
        }

        // Apply patterns in order (comments and strings first to avoid conflicts)
        for (const p of patterns) {
            escaped = escaped.replace(p.regex, function (match) {
                return addToken(match, p.cls);
            });
        }

        // Replace tokens back
        for (const t of tokens) {
            escaped = escaped.replace(t.id, t.html);
        }

        return escaped;
    }

    // ========== Block-level Parsing ==========

    /**
     * Parse a code block (fenced or indented)
     * @param {string} code - The raw code content
     * @param {string} lang - The language identifier
     * @returns {string} HTML string
     */
    function parseCodeBlock(code, lang) {
        const escapedCode = lang ? highlightCode(code, lang) : escapeHtml(code);
        const langLabel = lang ? '<span class="code-lang">' + escapeHtml(lang) + '</span>' : '';

        // Check for special language blocks
        if (lang === 'mermaid') {
            return '<div class="mermaid-block">' + escapeHtml(code) + '</div>';
        }

        if (lang === 'math' || lang === 'katex' || lang === 'latex') {
            return '<div class="math-block">' + escapeHtml(code) + '</div>';
        }

        return '<pre>' + langLabel + '<code class="language-' + escapeHtml(lang || 'text') + '">' +
            escapedCode + '</code></pre>';
    }

    /**
     * Parse a table row into HTML
     * @param {string} row - The raw table row
     * @param {boolean} isHeader - Whether this is a header row
     * @param {number[]} alignments - Column alignment array (0=left, 1=center, 2=right)
     * @returns {string} HTML string
     */
    function parseTableRow(row, isHeader, alignments) {
        const cells = row.replace(/^\||\|$/g, '').split('|');
        const tag = isHeader ? 'th' : 'td';
        let html = '<tr>';

        cells.forEach(function (cell, i) {
            const align = alignments[i];
            let alignAttr = '';
            if (align === 1) alignAttr = ' align="center"';
            else if (align === 2) alignAttr = ' align="right"';

            html += '<' + tag + alignAttr + '>' + parseInline(cell.trim()) + '</' + tag + '>';
        });

        html += '</tr>';
        return html;
    }

    /**
     * Parse a table
     * @param {string} text - The raw table text
     * @returns {string|null} HTML string or null if not a table
     */
    function parseTable(text) {
        const rows = text.trim().split('\n');
        if (rows.length < 2) return null;

        // Check if second row is a separator
        const sepRow = rows[1].trim();
        if (!/^[\s|:-]+$/.test(sepRow)) return null;

        // Parse alignments from separator row
        const alignCells = sepRow.replace(/^\||\|$/g, '').split('|');
        const alignments = alignCells.map(function (cell) {
            cell = cell.trim();
            if (/^:-+:$/.test(cell)) return 1; // center
            if (/^-+:$/.test(cell)) return 2;   // right
            return 0; // left (default)
        });

        let html = '<table>';
        // Header row
        html += '<thead>' + parseTableRow(rows[0], true, alignments) + '</thead>';
        // Body rows
        html += '<tbody>';
        for (let i = 2; i < rows.length; i++) {
            if (rows[i].trim()) {
                html += parseTableRow(rows[i], false, alignments);
            }
        }
        html += '</tbody></table>';

        return html;
    }

    /**
     * Parse a blockquote (supports nesting)
     * @param {string} text - The blockquote text
     * @returns {string} HTML string
     */
    function parseBlockquote(text) {
        // Remove leading '>' from each line
        const lines = text.split('\n');
        const content = lines.map(function (line) {
            return line.replace(/^>\s?/, '');
        }).join('\n');

        return '<blockquote>' + parseBlocks(content) + '</blockquote>';
    }

    /**
     * Parse an unordered list
     * @param {string} text - The list text
     * @returns {string} HTML string
     */
    function parseUnorderedList(text) {
        const items = text.split('\n');
        let html = '<ul>';
        let inSublist = false;

        items.forEach(function (item) {
            const match = item.match(/^(\s*)([-*+])\s+(.*)/);
            if (match) {
                const indent = match[1].length;
                const content = match[3];

                // Check for task list
                const taskMatch = content.match(/^\[([ xX])\]\s+(.*)/);
                if (taskMatch) {
                    const checked = taskMatch[1].toLowerCase() === 'x';
                    html += '<li class="task-list-item">' +
                        '<input type="checkbox" disabled' + (checked ? ' checked' : '') + '> ' +
                        parseInline(taskMatch[2]) + '</li>';
                } else {
                    html += '<li>' + parseInline(content) + '</li>';
                }
            }
        });

        html += '</ul>';
        return html;
    }

    /**
     * Parse an ordered list
     * @param {string} text - The list text
     * @returns {string} HTML string
     */
    function parseOrderedList(text) {
        const items = text.split('\n');
        let html = '<ol>';

        items.forEach(function (item) {
            const match = item.match(/^\d+\.\s+(.*)/);
            if (match) {
                html += '<li>' + parseInline(match[1]) + '</li>';
            }
        });

        html += '</ol>';
        return html;
    }

    /**
     * Parse footnotes section
     * @param {string} text - The footnotes text
     * @returns {string} HTML string
     */
    function parseFootnotes(text) {
        const lines = text.split('\n');
        let html = '<div class="footnotes"><ol>';

        lines.forEach(function (line) {
            const match = line.match(/^\[\^(\w+)\]:\s+(.*)/);
            if (match) {
                html += '<li id="fn-' + escapeHtml(match[1]) + '">' +
                    parseInline(match[2]) + '</li>';
            }
        });

        html += '</ol></div>';
        return html;
    }

    /**
     * Parse blocks (top-level parser)
     * Processes text line by line, grouping into block elements
     * @param {string} text - The raw Markdown text
     * @returns {string} HTML string
     */
    function parseBlocks(text) {
        const lines = text.split('\n');
        let html = '';
        let i = 0;
        let buffer = '';
        let bufferType = null; // 'code', 'table', 'blockquote', 'ul', 'ol', 'footnote'

        while (i < lines.length) {
            const line = lines[i];

            // Empty line: flush buffer
            if (line.trim() === '') {
                if (bufferType) {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                    bufferType = null;
                }
                i++;
                continue;
            }

            // Fenced code block
            const codeStart = line.match(/^(`{3,}|~{3,})(\w*)\s*$/);
            if (codeStart) {
                if (bufferType) {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                    bufferType = null;
                }

                const fence = codeStart[1];
                const lang = codeStart[2];
                let codeContent = '';
                i++;

                while (i < lines.length && !lines[i].startsWith(fence)) {
                    codeContent += lines[i] + '\n';
                    i++;
                }

                html += parseCodeBlock(codeContent.trimEnd(), lang);
                i++; // skip closing fence
                continue;
            }

            // Table detection
            if (line.includes('|') && i + 1 < lines.length &&
                /^[\s|:-]+$/.test(lines[i + 1].trim())) {
                if (bufferType) {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                    bufferType = null;
                }

                let tableText = line;
                i++;
                while (i < lines.length && lines[i].trim().includes('|') && lines[i].trim() !== '') {
                    tableText += '\n' + lines[i];
                    i++;
                }

                html += parseTable(tableText) || '<p>' + parseInline(line) + '</p>';
                continue;
            }

            // Heading
            const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
            if (headingMatch) {
                if (bufferType) {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                    bufferType = null;
                }

                const level = headingMatch[1].length;
                const content = headingMatch[2];
                html += '<h' + level + '>' + parseInline(content) + '</h' + level + '>';
                i++;
                continue;
            }

            // Horizontal rule
            if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line.trim())) {
                if (bufferType) {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                    bufferType = null;
                }
                html += '<hr>';
                i++;
                continue;
            }

            // Blockquote
            if (line.match(/^>\s?/)) {
                if (bufferType && bufferType !== 'blockquote') {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                }
                bufferType = 'blockquote';
                buffer += (buffer ? '\n' : '') + line;
                i++;
                continue;
            }

            // Unordered list
            if (line.match(/^(\s*)([-*+])\s+/)) {
                if (bufferType && bufferType !== 'ul') {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                }
                bufferType = 'ul';
                buffer += (buffer ? '\n' : '') + line;
                i++;
                continue;
            }

            // Ordered list
            if (line.match(/^\d+\.\s+/)) {
                if (bufferType && bufferType !== 'ol') {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                }
                bufferType = 'ol';
                buffer += (buffer ? '\n' : '') + line;
                i++;
                continue;
            }

            // Footnotes section
            if (line.match(/^\[\^\w+\]:/)) {
                if (bufferType && bufferType !== 'footnote') {
                    html += flushBuffer(buffer, bufferType);
                    buffer = '';
                }
                bufferType = 'footnote';
                buffer += (buffer ? '\n' : '') + line;
                i++;
                continue;
            }

            // Regular paragraph text
            if (bufferType) {
                html += flushBuffer(buffer, bufferType);
                buffer = '';
                bufferType = null;
            }

            html += '<p>' + parseInline(line) + '</p>';
            i++;
        }

        // Flush remaining buffer
        if (bufferType) {
            html += flushBuffer(buffer, bufferType);
        }

        return html;
    }

    /**
     * Flush a block buffer to HTML
     * @param {string} buffer - The accumulated buffer text
     * @param {string} type - The buffer type
     * @returns {string} HTML string
     */
    function flushBuffer(buffer, type) {
        switch (type) {
            case 'blockquote':
                return parseBlockquote(buffer);
            case 'ul':
                return parseUnorderedList(buffer);
            case 'ol':
                return parseOrderedList(buffer);
            case 'footnote':
                return parseFootnotes(buffer);
            default:
                return '<p>' + parseInline(buffer) + '</p>';
        }
    }

    // ========== Inline Parsing ==========

    /**
     * Parse inline Markdown elements
     * Processes text for emphasis, code, links, images, etc.
     * @param {string} text - The inline text
     * @returns {string} HTML string
     */
    function parseInline(text) {
        // Process in order of priority to avoid conflicts
        let result = text;

        // 1. Escaped characters (backslash escapes)
        result = result.replace(/\\([\\`*_{}\[\]()#+\-.!~|])/g, '$1');

        // 2. Inline code (must come before other inline patterns)
        result = result.replace(/`([^`]+)`/g, function (match, code) {
            return '<code>' + escapeHtml(code) + '</code>';
        });

        // 3. Math formulas: block-level $$...$$ (must come before inline $...$)
        result = result.replace(/\$\$([\s\S]+?)\$\$/g, function (match, formula) {
            return '<span class="math-block">' + escapeHtml(formula) + '</span>';
        });

        // 4. Inline math $...$
        result = result.replace(/\$([^\$\n]+?)\$/g, function (match, formula) {
            return '<span class="math-inline">' + escapeHtml(formula) + '</span>';
        });

        // 5. Images ![alt](url "title")
        result = result.replace(/!\[([^\]]*)\]\(([^)]+?)(?:\s+"([^"]+)")?\)/g,
            function (match, alt, url, title) {
                const safeUrl = sanitizeUrl(url);
                const titleAttr = title ? ' title="' + escapeHtml(title) + '"' : '';
                return '<img src="' + safeUrl + '" alt="' + escapeHtml(alt) + '"' + titleAttr + '>';
            }
        );

        // 6. Links [text](url "title")
        result = result.replace(/\[([^\]]+)\]\(([^)]+?)(?:\s+"([^"]+)")?\)/g,
            function (match, text, url, title) {
                const safeUrl = sanitizeUrl(url);
                const titleAttr = title ? ' title="' + escapeHtml(title) + '"' : '';
                return '<a href="' + safeUrl + '"' + titleAttr + '>' + parseInline(text) + '</a>';
            }
        );

        // 7. Footnote references [^id]
        result = result.replace(/\[\^(\w+)\]/g, function (match, id) {
            return '<sup class="footnote-ref"><a href="#fn-' + escapeHtml(id) + '">[' + escapeHtml(id) + ']</a></sup>';
        });

        // 8. Highlight mark ==text==
        result = result.replace(/==([^=]+)==/g, function (match, text) {
            return '<mark>' + text + '</mark>';
        });

        // 9. Bold + Italic ***text*** or ___text___
        result = result.replace(/\*{3}(.+?)\*{3}/g, '<strong><em>$1</em></strong>');
        result = result.replace(/_{3}(.+?)_{3}/g, '<strong><em>$1</em></strong>');

        // 10. Bold **text** or __text__
        result = result.replace(/\*{2}(.+?)\*{2}/g, '<strong>$1</strong>');
        result = result.replace(/_{2}(.+?)_{2}/g, '<strong>$1</strong>');

        // 11. Italic *text* or _text_
        result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');
        result = result.replace(/_(.+?)_/g, '<em>$1</em>');

        // 12. Strikethrough ~~text~~
        result = result.replace(/~~(.+?)~~/g, '<del>$1</del>');

        // 13. Superscript X^text^
        result = result.replace(/\^([^\^]+)\^/g, '<sup>$1</sup>');

        // 14. Subscript X~text~
        result = result.replace(/~([^~]+)~/g, '<sub>$1</sub>');

        // 15. Autolink <url>
        result = result.replace(/<((https?:\/\/|mailto:)[^>]+)>/g, function (match, url) {
            const safeUrl = sanitizeUrl(url);
            return '<a href="' + safeUrl + '">' + escapeHtml(url) + '</a>';
        });

        // 16. Line break (two spaces + newline)
        result = result.replace(/  \n/g, '<br>');

        return result;
    }

    // ========== CJK Typography Post-processing ==========

    /**
     * Add spaces between CJK and Latin characters for better readability
     * @param {string} html - The HTML content
     * @returns {string} Processed HTML
     */
    function cjkTypography(html) {
        // CJK character ranges
        const cjkRegex = /[\u4e00-\u9fff\u3400-\u4dbf\u3000-\u303f\uff00-\uffef\u2e80-\u2eff\u31c0-\u31ef]/;

        // Add thin space between CJK and half-width characters
        html = html.replace(/([\u4e00-\u9fff\u3400-\u4dbf])([A-Za-z0-9`~!@#$%^&*()\-_=+\[\]{};:'",.<>?/\\|])/g,
            '$1\u2009$2');
        html = html.replace(/([A-Za-z0-9`~!@#$%^&*()\-_=+\[\]{};:'",.<>?/\\])([\u4e00-\u9fff\u3400-\u4dbf])/g,
            '$1\u2009$2');

        return html;
    }

    /**
     * Add first-line indent to CJK paragraphs
     * @param {string} html - The HTML content
     * @returns {string} Processed HTML
     */
    function cjkParagraphIndent(html) {
        // Add indent class to paragraphs that start with CJK characters
        html = html.replace(/<p>([\u4e00-\u9fff])/g, '<p class="cjk-paragraph">$1');
        return html;
    }

    // ========== Main Parse Function ==========

    /**
     * Parse Markdown text to HTML
     * @param {string} markdown - The raw Markdown text
     * @param {Object} options - Parse options
     * @param {boolean} options.cjkSpacing - Enable CJK auto spacing (default: true)
     * @param {boolean} options.cjkIndent - Enable CJK paragraph indent (default: true)
     * @returns {string} HTML string
     */
    function parse(markdown, options) {
        options = options || {};
        const cjkSpacing = options.cjkSpacing !== false;
        const cjkIndent = options.cjkIndent !== false;

        if (!markdown || typeof markdown !== 'string') {
            return '';
        }

        // Normalize line endings
        let text = markdown.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

        // Parse blocks
        let html = parseBlocks(text);

        // CJK typography post-processing
        if (cjkSpacing) {
            html = cjkTypography(html);
        }
        if (cjkIndent) {
            html = cjkParagraphIndent(html);
        }

        return html;
    }

    /**
     * Parse Markdown to plain text (strip all HTML)
     * @param {string} markdown - The raw Markdown text
     * @returns {string} Plain text
     */
    function parseToText(markdown) {
        if (!markdown || typeof markdown !== 'string') {
            return '';
        }

        // Remove code blocks
        let text = markdown.replace(/```[\s\S]*?```/g, '');
        // Remove inline code
        text = text.replace(/`[^`]+`/g, '');
        // Remove images
        text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1');
        // Remove links
        text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
        // Remove bold/italic
        text = text.replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1');
        text = text.replace(/_{1,3}([^_]+)_{1,3}/g, '$1');
        // Remove strikethrough
        text = text.replace(/~~([^~]+)~~/g, '$1');
        // Remove headings markers
        text = text.replace(/^#{1,6}\s+/gm, '');
        // Remove blockquote markers
        text = text.replace(/^>\s?/gm, '');
        // Remove list markers
        text = text.replace(/^[-*+]\s+/gm, '');
        text = text.replace(/^\d+\.\s+/gm, '');
        // Remove horizontal rules
        text = text.replace(/^(-{3,}|\*{3,}|_{3,})\s*$/gm, '');
        // Remove math
        text = text.replace(/\$\$[\s\S]+?\$\$/g, '');
        text = text.replace(/\$[^\$]+?\$/g, '');
        // Remove highlight
        text = text.replace(/==([^=]+)==/g, '$1');
        // Remove table separators
        text = text.replace(/^\|?[\s|:-]+\|?$/gm, '');
        // Remove extra pipes
        text = text.replace(/\|/g, ' ');

        return text.trim();
    }

    /**
     * Count words in text (supports both CJK and Latin)
     * @param {string} text - The text to count
     * @returns {Object} Word count statistics
     */
    function countWords(text) {
        if (!text) return { words: 0, characters: 0, lines: 0 };

        // Count CJK characters as individual words
        const cjkChars = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;

        // Count Latin words
        const latinWords = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, ' ')
            .trim()
            .split(/\s+/)
            .filter(function (w) { return w.length > 0; }).length;

        const words = cjkChars + latinWords;
        const characters = text.length;
        const lines = text.split('\n').length;

        return { words: words, characters: characters, lines: lines };
    }

    // ========== Public API ==========
    return {
        parse: parse,
        parseToText: parseToText,
        countWords: countWords,
        escapeHtml: escapeHtml,
        sanitizeUrl: sanitizeUrl,
        highlightCode: highlightCode
    };

})();
