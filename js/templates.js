/**
 * MarkFlow Studio - Document Templates Module
 * Provides built-in document templates for quick document creation.
 * Includes templates for technical docs, meeting notes, weekly reports,
 * project README, personal notes, and presentations.
 */

'use strict';

const MarkFlowTemplates = (function () {

    // ========== Template Definitions ==========

    const templates = [
        {
            id: 'tech-doc',
            name: 'Technical Document',
            icon: '{ }',
            description: 'Structured technical documentation with API reference and changelog sections.',
            content: [
                '# Technical Document',
                '',
                '> Last updated: ' + new Date().toISOString().split('T')[0],
                '',
                '## Overview',
                '',
                'This document provides a comprehensive overview of the project, including architecture, API reference, and usage guidelines.',
                '',
                '## Architecture',
                '',
                '### System Components',
                '',
                '| Component | Description | Status |',
                '| --- | --- | --- |',
                '| Core Engine | Main processing module | Stable |',
                '| API Layer | RESTful interface | In Development |',
                '| Database | Data persistence layer | Stable |',
                '| Cache | Redis caching layer | Planned |',
                '',
                '```mermaid',
                'graph TD',
                '    A[Client] --> B[API Gateway]',
                '    B --> C[Auth Service]',
                '    B --> D[Core Service]',
                '    D --> E[Database]',
                '    D --> F[Cache]',
                '```',
                '',
                '## API Reference',
                '',
                '### Endpoint: GET /api/items',
                '',
                '**Description:** Retrieve a list of items.',
                '',
                '**Parameters:**',
                '',
                '| Parameter | Type | Required | Description |',
                '| --- | --- | --- | --- |',
                '| `page` | integer | No | Page number (default: 1) |',
                '| `limit` | integer | No | Items per page (default: 20) |',
                '| `search` | string | No | Search keyword |',
                '',
                '**Response:**',
                '',
                '```json',
                '{',
                '  "data": [],',
                '  "total": 100,',
                '  "page": 1,',
                '  "limit": 20',
                '}',
                '```',
                '',
                '## Installation',
                '',
                '```bash',
                'npm install project-name',
                '```',
                '',
                '## Configuration',
                '',
                'Create a `.env` file in the project root:',
                '',
                '```env',
                'PORT=3000',
                'DATABASE_URL=postgresql://localhost:5432/mydb',
                'JWT_SECRET=your-secret-key',
                '```',
                '',
                '## Changelog',
                '',
                '### v1.2.0 (' + new Date().toISOString().split('T')[0] + ')',
                '',
                '- [x] Added new API endpoints',
                '- [x] Performance optimization',
                '- [ ] Documentation update',
                '',
                '### v1.1.0',
                '',
                '- [x] Bug fixes',
                '- [x] New features',
                ''
            ].join('\n')
        },
        {
            id: 'meeting-notes',
            name: 'Meeting Notes',
            icon: '#',
            description: 'Structured meeting minutes with attendees, agenda, and action items.',
            content: [
                '# Meeting Notes',
                '',
                '**Date:** ' + new Date().toLocaleDateString('zh-CN') + '  ',
                '**Time:** 14:00 - 15:30  ',
                '**Location:** Conference Room A / Online  ',
                '**Facilitator:** [Name]  ',
                '**Note Taker:** [Name]',
                '',
                '---',
                '',
                '## Attendees',
                '',
                '- [Name 1] - Product',
                '- [Name 2] - Engineering',
                '- [Name 3] - Design',
                '- [Name 4] - QA',
                '',
                '## Agenda',
                '',
                '1. Project status review',
                '2. Feature discussion',
                '3. Timeline and milestones',
                '4. Open issues and blockers',
                '',
                '## Discussion Notes',
                '',
                '### 1. Project Status Review',
                '',
                '- Current sprint progress: **75% complete**',
                '- 3 out of 4 features are on track',
                '- Performance optimization is delayed by 2 days',
                '',
                '### 2. Feature Discussion',
                '',
                '- New requirement: User notification system',
                '- Estimated effort: 5 developer-days',
                '- Design mockups will be ready by Friday',
                '',
                '### 3. Timeline and Milestones',
                '',
                '| Milestone | Target Date | Status |',
                '| --- | --- | --- |',
                '| Alpha Release | 2024-03-15 | On Track |',
                '| Beta Release | 2024-04-01 | At Risk |',
                '| GA Release | 2024-04-15 | Planned |',
                '',
                '### 4. Open Issues',
                '',
                '- ~~Database migration~~ (Resolved)',
                '- API rate limiting needs review',
                '- Third-party service integration pending',
                '',
                '## Action Items',
                '',
                '| # | Task | Owner | Due Date | Status |',
                '| --- | --- | --- | --- | --- |',
                '| 1 | Complete notification API | Name 2 | 2024-03-10 | In Progress |',
                '| 2 | Review design mockups | Name 3 | 2024-03-08 | Pending |',
                '| 3 | Update test cases | Name 4 | 2024-03-12 | Pending |',
                '| 4 | Schedule performance review | Name 1 | 2024-03-09 | Pending |',
                '',
                '## Next Meeting',
                '',
                '**Date:** [Next meeting date]  ',
                '**Time:** 14:00 - 15:00',
                ''
            ].join('\n')
        },
        {
            id: 'weekly-report',
            name: 'Weekly Report',
            icon: '%',
            description: 'Weekly work summary with accomplishments, plans, and metrics.',
            content: [
                '# Weekly Report',
                '',
                '**Name:** [Your Name]  ',
                '**Team:** [Team Name]  ',
                '**Week:** ' + getWeekRange() + '  ',
                '**Date:** ' + new Date().toLocaleDateString('zh-CN'),
                '',
                '---',
                '',
                '## Summary',
                '',
                'This week focused on [main theme]. Key achievements include [highlight 1] and [highlight 2].',
                '',
                '## Accomplishments',
                '',
                '### Completed',
                '',
                '- [x] Feature A development and testing',
                '- [x] Code review for PR #123',
                '- [x] Documentation update',
                '- [x] Bug fix for issue #456',
                '',
                '### In Progress',
                '',
                '- [ ] Feature B implementation (60% complete)',
                '- [ ] Performance optimization',
                '- [ ] Unit test coverage improvement',
                '',
                '## Metrics',
                '',
                '| Metric | Target | Actual | Status |',
                '| --- | --- | --- | --- |',
                '| Tasks Completed | 10 | 8 | :yellow_circle: |',
                '| Code Coverage | 80% | 78% | :yellow_circle: |',
                '| Bug Resolution | 5 | 5 | :green_circle: |',
                '| Code Reviews | 8 | 10 | :green_circle: |',
                '',
                '## Challenges',
                '',
                '1. **Challenge 1:** Description of the challenge and impact.',
                '   - *Mitigation:* Steps taken or planned to address it.',
                '',
                '2. **Challenge 2:** Description of the challenge.',
                '   - *Mitigation:* Proposed solution.',
                '',
                '## Next Week Plan',
                '',
                '- [ ] Complete Feature B implementation',
                '- [ ] Start Feature C design',
                '- [ ] Improve test coverage to 80%',
                '- [ ] Conduct team knowledge sharing session',
                '',
                '## Notes',
                '',
                '- Need to coordinate with Team X for API integration',
                '- Schedule 1:1 with manager for career development discussion',
                ''
            ].join('\n')
        },
        {
            id: 'readme',
            name: 'Project README',
            icon: 'R',
            description: 'Standard project README with badges, installation, usage, and contribution guidelines.',
            content: [
                '# Project Name',
                '',
                '> A brief description of what this project does and who it is for.',
                '',
                '![License](https://img.shields.io/badge/license-MIT-blue) ![Version](https://img.shields.io/badge/version-1.0.0-green)',
                '',
                '## Features',
                '',
                '- Feature 1: Description',
                '- Feature 2: Description',
                '- Feature 3: Description',
                '- Feature 4: Description',
                '',
                '## Installation',
                '',
                '### Prerequisites',
                '',
                '- Node.js >= 16',
                '- npm >= 8',
                '',
                '### Quick Start',
                '',
                '```bash',
                '# Clone the repository',
                'git clone https://github.com/username/project.git',
                'cd project',
                '',
                '# Install dependencies',
                'npm install',
                '',
                '# Start development server',
                'npm run dev',
                '',
                '# Build for production',
                'npm run build',
                '```',
                '',
                '## Usage',
                '',
                '```javascript',
                'import { something } from \'./src/module\';',
                '',
                'const result = something({',
                '  option: \'value\'',
                '});',
                '',
                'console.log(result);',
                '```',
                '',
                '## Configuration',
                '',
                '| Option | Type | Default | Description |',
                '| --- | --- | --- | --- |',
                '| `debug` | boolean | `false` | Enable debug mode |',
                '| `port` | number | `3000` | Server port |',
                '| `timeout` | number | `5000` | Request timeout (ms) |',
                '',
                '## Project Structure',
                '',
                '```',
                'project/',
                '\u251c\u2500\u2500 src/',
                '\u2502   \u251c\u2500\u2500 components/',
                '\u2502   \u251c\u2500\u2500 utils/',
                '\u2502   \u2514\u2500\u2500 index.js',
                '\u251c\u2500\u2500 tests/',
                '\u251c\u2500\u2500 docs/',
                '\u251c\u2500\u2500 .gitignore',
                '\u251c\u2500\u2500 package.json',
                '\u2514\u2500\u2500 README.md',
                '```',
                '',
                '## Contributing',
                '',
                '1. Fork the project',
                '2. Create your feature branch (`git checkout -b feature/amazing-feature`)',
                '3. Commit your changes (`git commit -m \'Add some amazing feature\'`)',
                '4. Push to the branch (`git push origin feature/amazing-feature`)',
                '5. Open a Pull Request',
                '',
                '## License',
                '',
                'This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.',
                ''
            ].join('\n')
        },
        {
            id: 'personal-notes',
            name: 'Personal Notes',
            icon: 'N',
            description: 'Free-form personal note-taking template with tags and sections.',
            content: [
                '# Personal Notes',
                '',
                '**Date:** ' + new Date().toLocaleDateString('zh-CN') + '  ',
                '**Tags:** #notes #ideas',
                '',
                '---',
                '',
                '## Thoughts',
                '',
                '> Write your thoughts and ideas here...',
                '',
                '## Key Points',
                '',
                '- Point 1',
                '- Point 2',
                '- Point 3',
                '',
                '## Ideas',
                '',
                '1. **Idea A:** Description of the idea...',
                '   - Potential approach: ...',
                '   - Resources needed: ...',
                '',
                '2. **Idea B:** Description...',
                '   - Notes: ...',
                '',
                '## References',
                '',
                '- [Resource 1](https://example.com)',
                '- [Resource 2](https://example.com)',
                '',
                '## Action Items',
                '',
                '- [ ] Follow up on idea A',
                '- [ ] Research topic B',
                '- [ ] Share notes with team',
                '',
                '---',
                '',
                '*Last modified: ' + new Date().toLocaleString('zh-CN') + '*',
                ''
            ].join('\n')
        },
        {
            id: 'presentation',
            name: 'Presentation',
            icon: 'P',
            description: 'Slide deck template with title slide, content slides, and closing.',
            content: [
                '# Presentation Title',
                '',
                '**Author:** Your Name  ',
                '**Date:** ' + new Date().toLocaleDateString('zh-CN') + '  ',
                '**Organization:** Company / Team',
                '',
                '---',
                '',
                '# Agenda',
                '',
                '1. Introduction',
                '2. Background',
                '3. Key Findings',
                '4. Solution',
                '5. Demo',
                '6. Q&A',
                '',
                '---',
                '',
                '# Introduction',
                '',
                '- Who we are',
                '- What we do',
                '- Why this matters',
                '',
                '---',
                '',
                '# Background',
                '',
                '## The Problem',
                '',
                '> Describe the problem or challenge that needs to be addressed.',
                '',
                '## Current State',
                '',
                '| Metric | Value |',
                '| --- | --- |',
                '| Performance | 45% |',
                '| Satisfaction | 3.2/5 |',
                '| Cost | High |',
                '',
                '---',
                '',
                '# Key Findings',
                '',
                '### Finding 1',
                '',
                '- Data point A',
                '- Data point B',
                '- **Insight:** ...',
                '',
                '### Finding 2',
                '',
                '- Data point C',
                '- Data point D',
                '- **Insight:** ...',
                '',
                '---',
                '',
                '# Solution',
                '',
                '```mermaid',
                'graph LR',
                '    A[Input] --> B[Process]',
                '    B --> C[Output]',
                '    C --> D[Feedback]',
                '    D --> B',
                '```',
                '',
                '### Benefits',
                '',
                '- **Efficiency:** 40% improvement',
                '- **Quality:** Reduced error rate',
                '- **Cost:** 30% savings',
                '',
                '---',
                '',
                '# Demo',
                '',
                '> Live demonstration of the solution in action.',
                '',
                '---',
                '',
                '# Summary',
                '',
                '- Key takeaway 1',
                '- Key takeaway 2',
                '- Key takeaway 3',
                '',
                '---',
                '',
                '# Thank You',
                '',
                '**Questions?**',
                '',
                '- Email: your@email.com',
                '- Website: https://example.com',
                ''
            ].join('\n')
        }
    ];

    // ========== Helper Functions ==========

    /**
     * Get the current week range string
     * @returns {string} Week range string
     */
    function getWeekRange() {
        const now = new Date();
        const dayOfWeek = now.getDay() || 7;
        const monday = new Date(now);
        monday.setDate(now.getDate() - dayOfWeek + 1);
        const friday = new Date(monday);
        friday.setDate(monday.getDate() + 4);

        const format = function (d) {
            return d.getFullYear() + '-' +
                String(d.getMonth() + 1).padStart(2, '0') + '-' +
                String(d.getDate()).padStart(2, '0');
        };

        return format(monday) + ' to ' + format(friday);
    }

    // ========== UI Rendering ==========

    /**
     * Initialize the templates module
     */
    function init() {
        renderTemplateGrid();
        bindEvents();
    }

    /**
     * Render the template selection grid
     */
    function renderTemplateGrid() {
        const grid = document.getElementById('templatesGrid');
        if (!grid) return;

        grid.innerHTML = templates.map(function (tpl) {
            return '<div class="template-card" data-template-id="' + tpl.id + '">' +
                '<div class="template-card-icon">' + tpl.icon + '</div>' +
                '<div class="template-card-title">' + tpl.name + '</div>' +
                '<div class="template-card-desc">' + tpl.description + '</div>' +
                '</div>';
        }).join('');
    }

    /**
     * Bind template card click events
     */
    function bindEvents() {
        const grid = document.getElementById('templatesGrid');
        if (!grid) return;

        grid.addEventListener('click', function (e) {
            const card = e.target.closest('.template-card');
            if (!card) return;

            const templateId = card.getAttribute('data-template-id');
            applyTemplate(templateId);
        });

        // Close button
        const closeBtn = document.getElementById('btnCloseTemplates');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                document.getElementById('templatesModal').style.display = 'none';
            });
        }
    }

    /**
     * Apply a template to the editor
     * @param {string} templateId - The template ID
     */
    function applyTemplate(templateId) {
        const template = templates.find(function (t) {
            return t.id === templateId;
        });

        if (!template) return;

        // Confirm before replacing content
        const editorContent = MarkFlowEditor.getContent();
        if (editorContent.trim().length > 0) {
            if (!confirm('Applying a template will replace the current content. Continue?')) {
                return;
            }
        }

        MarkFlowEditor.setContent(template.content);

        // Close the modal
        document.getElementById('templatesModal').style.display = 'none';

        // Focus editor
        const editorEl = document.getElementById('editor');
        if (editorEl) {
            editorEl.focus();
            editorEl.setSelectionRange(0, 0);
        }
    }

    /**
     * Show the templates modal
     */
    function showModal() {
        document.getElementById('templatesModal').style.display = 'flex';
    }

    /**
     * Hide the templates modal
     */
    function hideModal() {
        document.getElementById('templatesModal').style.display = 'none';
    }

    // ========== Public API ==========
    return {
        init: init,
        apply: applyTemplate,
        showModal: showModal,
        hideModal: hideModal,
        getTemplates: function () { return templates; }
    };

})();
