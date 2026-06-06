/**
 * MarkFlow Studio - Application Entry Point
 * Coordinates all modules, handles global events, manages settings,
 * and initializes the application from localStorage.
 */

'use strict';

(function () {

    // ========== Default Settings ==========
    const DEFAULT_SETTINGS = {
        theme: 'light',
        fontSize: 16,
        editorFont: "'Consolas', 'Monaco', monospace",
        tabSize: 4,
        autoSave: true,
        cjkSpacing: true,
        scrollSync: true,
        view: 'split'
    };

    // Theme rotation order
    const THEME_ORDER = ['light', 'dark', 'eyecare'];

    // ========== Settings Management ==========

    /**
     * Load settings from localStorage
     * @returns {Object} The loaded settings merged with defaults
     */
    function loadSettings() {
        try {
            const saved = localStorage.getItem('markflow-settings');
            if (saved) {
                return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(saved));
            }
        } catch (e) {
            console.warn('Failed to load settings:', e);
        }
        return Object.assign({}, DEFAULT_SETTINGS);
    }

    /**
     * Save settings to localStorage
     * @param {Object} settings - The settings to save
     */
    function saveSettings(settings) {
        try {
            localStorage.setItem('markflow-settings', JSON.stringify(settings));
        } catch (e) {
            console.warn('Failed to save settings:', e);
        }
    }

    // ========== Theme Management ==========

    /**
     * Apply a theme to the document
     * @param {string} theme - The theme name ('light', 'dark', 'eyecare')
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        // Update status bar
        const themeNames = {
            light: 'Light',
            dark: 'Dark',
            eyecare: 'Eye Care'
        };
        const statusTheme = document.getElementById('statusTheme');
        if (statusTheme) {
            statusTheme.textContent = themeNames[theme] || theme;
        }
    }

    /**
     * Cycle to the next theme
     * @param {string} currentTheme - The current theme name
     * @returns {string} The next theme name
     */
    function cycleTheme(currentTheme) {
        const idx = THEME_ORDER.indexOf(currentTheme);
        const nextIdx = (idx + 1) % THEME_ORDER.length;
        return THEME_ORDER[nextIdx];
    }

    // ========== Settings UI ==========

    /**
     * Initialize settings modal controls
     * @param {Object} settings - The current settings
     */
    function initSettingsUI(settings) {
        // Font size slider
        const fontSizeSlider = document.getElementById('settingFontSize');
        const fontSizeValue = document.getElementById('fontSizeValue');
        fontSizeSlider.value = settings.fontSize;
        fontSizeValue.textContent = settings.fontSize + 'px';
        fontSizeSlider.addEventListener('input', function () {
            fontSizeValue.textContent = this.value + 'px';
        });

        // Editor font select
        document.getElementById('settingEditorFont').value = settings.editorFont;

        // Tab size select
        document.getElementById('settingTabSize').value = settings.tabSize.toString();

        // Toggle switches
        document.getElementById('settingAutoSave').checked = settings.autoSave;
        document.getElementById('settingCjkSpacing').checked = settings.cjkSpacing;
        document.getElementById('settingScrollSync').checked = settings.scrollSync;
    }

    /**
     * Read settings from the UI controls
     * @returns {Object} The settings from UI
     */
    function readSettingsFromUI() {
        return {
            fontSize: parseInt(document.getElementById('settingFontSize').value),
            editorFont: document.getElementById('settingEditorFont').value,
            tabSize: parseInt(document.getElementById('settingTabSize').value),
            autoSave: document.getElementById('settingAutoSave').checked,
            cjkSpacing: document.getElementById('settingCjkSpacing').checked,
            scrollSync: document.getElementById('settingScrollSync').checked
        };
    }

    // ========== Global Event Binding ==========

    /**
     * Bind all global events
     * @param {Object} settings - The current settings
     */
    function bindGlobalEvents(settings) {
        // Theme toggle button
        document.getElementById('btnTheme').addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = cycleTheme(currentTheme);
            applyTheme(nextTheme);
            settings.theme = nextTheme;
            saveSettings(settings);
        });

        // Settings button
        document.getElementById('btnSettings').addEventListener('click', function () {
            initSettingsUI(settings);
            document.getElementById('settingsModal').style.display = 'flex';
        });

        // Close settings button
        document.getElementById('btnCloseSettings').addEventListener('click', function () {
            document.getElementById('settingsModal').style.display = 'none';
        });

        // Save settings button
        document.getElementById('btnSaveSettings').addEventListener('click', function () {
            const newSettings = readSettingsFromUI();
            Object.assign(settings, newSettings);
            saveSettings(settings);
            MarkFlowEditor.updateSettings(newSettings);
            document.getElementById('settingsModal').style.display = 'none';
        });

        // Cancel settings button
        document.getElementById('btnCancelSettings').addEventListener('click', function () {
            document.getElementById('settingsModal').style.display = 'none';
        });

        // Templates button
        document.getElementById('btnTemplates').addEventListener('click', function () {
            MarkFlowTemplates.showModal();
        });

        // New file button
        document.getElementById('btnNew').addEventListener('click', function () {
            MarkFlowEditor.newFile();
        });

        // Open file button
        document.getElementById('btnOpen').addEventListener('click', function () {
            document.getElementById('fileInput').click();
        });

        // Save button
        document.getElementById('btnSave').addEventListener('click', function () {
            MarkFlowEditor.saveFile();
        });

        // View mode buttons
        document.querySelectorAll('.view-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const view = this.getAttribute('data-view');

                if (view === 'slideshow') {
                    MarkFlowSlideshow.enter();
                } else {
                    MarkFlowEditor.setView(view);
                    settings.view = view;
                    saveSettings(settings);
                }
            });
        });

        // Close modals on overlay click
        document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) {
                    overlay.style.display = 'none';
                }
            });
        });

        // Global keyboard shortcuts (outside editor)
        document.addEventListener('keydown', function (e) {
            const ctrl = e.ctrlKey || e.metaKey;

            // Ctrl+\: Toggle theme
            if (ctrl && e.key === '\\') {
                e.preventDefault();
                document.getElementById('btnTheme').click();
            }
        });

        // Window resize: ensure proper layout
        window.addEventListener('resize', function () {
            // Reset panel flex on resize if they were manually sized
            if (window.innerWidth <= 768) {
                const leftPanel = document.getElementById('editorPanel');
                const rightPanel = document.getElementById('previewPanel');
                if (leftPanel) { leftPanel.style.flex = ''; leftPanel.style.width = ''; }
                if (rightPanel) { rightPanel.style.flex = ''; rightPanel.style.width = ''; }
            }
        });

        // Before unload: warn about unsaved changes
        window.addEventListener('beforeunload', function (e) {
            const content = MarkFlowEditor.getContent();
            const saved = localStorage.getItem('markflow-content');
            if (content !== saved) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }

    // ========== Application Initialization ==========

    /**
     * Initialize the MarkFlow Studio application
     */
    function initApp() {
        // Load settings
        const settings = loadSettings();

        // Apply theme
        applyTheme(settings.theme);

        // Restore content from localStorage
        const savedContent = MarkFlowEditor.loadFromLocalStorage();

        // Initialize editor
        MarkFlowEditor.init({
            initialContent: savedContent || getDefaultContent(),
            tabSize: settings.tabSize,
            autoSave: settings.autoSave,
            cjkSpacing: settings.cjkSpacing,
            scrollSync: settings.scrollSync,
            fontSize: settings.fontSize,
            editorFont: settings.editorFont
        });

        // Set initial view
        MarkFlowEditor.setView(settings.view);

        // Initialize slideshow
        MarkFlowSlideshow.init();
        MarkFlowSlideshow.initTouchSupport();

        // Initialize templates
        MarkFlowTemplates.init();

        // Bind global events
        bindGlobalEvents(settings);

        // Focus editor
        const editorEl = document.getElementById('editor');
        if (editorEl) {
            editorEl.focus();
        }

        console.log('MarkFlow Studio initialized successfully.');
    }

    /**
     * Get the default welcome content
     * @returns {string} Default Markdown content
     */
    function getDefaultContent() {
        return [
            '# Welcome to MarkFlow Studio',
            '',
            'A lightweight Markdown smart typesetting engine with zero dependencies.',
            '',
            '## Features',
            '',
            '- **Real-time Preview** - See your changes instantly as you type',
            '- **Syntax Highlighting** - Beautiful code blocks with keyword highlighting',
            '- **Multiple Themes** - Light, Dark, and Eye-care modes',
            '- **Slideshow Mode** - Present your Markdown as slides',
            '- **CJK Typography** - Optimized spacing for Chinese/Japanese/Korean text',
            '- **Export Options** - Save as Markdown, HTML, or PDF',
            '- **Auto Save** - Never lose your work',
            '',
            '## Markdown Examples',
            '',
            '### Text Formatting',
            '',
            'You can write **bold text**, *italic text*, ~~strikethrough~~, and ==highlighted text==.',
            '',
            '### Code',
            '',
            'Inline code: `const x = 42;`',
            '',
            '```javascript',
            'function greet(name) {',
            '    // A simple greeting function',
            '    const message = `Hello, ${name}!`;',
            '    console.log(message);',
            '    return message;',
            '}',
            '```',
            '',
            '### Math Formulas',
            '',
            'Inline formula: $E = mc^2$',
            '',
            'Block formula:',
            '',
            '$$',
            '\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}',
            '$$',
            '',
            '### Table',
            '',
            '| Feature | Status | Priority |',
            '| --- | --- | --- |',
            '| Markdown Parser | Done | High |',
            '| Live Preview | Done | High |',
            '| Slideshow Mode | Done | Medium |',
            '| PDF Export | Done | Medium |',
            '',
            '### Task List',
            '',
            '- [x] Create project structure',
            '- [x] Implement Markdown parser',
            '- [x] Build editor with live preview',
            '- [x] Add theme support',
            '- [ ] Add more features',
            '',
            '### Blockquote',
            '',
            '> "The best way to predict the future is to invent it."',
            '> ',
            '> -- Alan Kay',
            '',
            '### Subscript & Superscript',
            '',
            'Chemical formula: H~2~O  ',
            'Math expression: X^2^ + Y^2^ = Z^2^',
            '',
            '---',
            '',
            '## Keyboard Shortcuts',
            '',
            '| Shortcut | Action |',
            '| --- | --- |',
            '| `Ctrl+B` | Bold |',
            '| `Ctrl+I` | Italic |',
            '| `Ctrl+K` | Insert Link |',
            '| `Ctrl+S` | Save File |',
            '| `Ctrl+N` | New File |',
            '| `Ctrl+O` | Open File |',
            '| `Ctrl+H` | Find & Replace |',
            '| `Ctrl+\\` | Toggle Theme |',
            '| `Tab` | Indent |',
            '| `Shift+Tab` | Outdent |',
            '',
            '---',
            '',
            '*Start editing to see the magic happen!*',
            ''
        ].join('\n');
    }

    // ========== Start Application ==========
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();
