# Contributing to MarkFlow Studio

First off, thank you for considering contributing to MarkFlow Studio! It's people like you that make this project better.

## How to Contribute

### 1. Fork the Repository

Click the **Fork** button at the top right of the repository page to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/MarkFlow-Studio.git
cd MarkFlow-Studio
```

### 3. Create a Branch

Create a descriptive branch for your changes:

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes

- Ensure your code follows the project's coding standards.
- Test your changes thoroughly by opening `index.html` in a browser.
- Keep changes focused and minimal — one feature or fix per pull request.

### 5. Commit Your Changes

Follow the [Angular Commit Message Convention](#commit-message-convention) for your commit messages:

```bash
git add .
git commit -m "feat: add your feature description"
```

### 6. Push to Your Fork

```bash
git push origin feat/your-feature-name
```

### 7. Open a Pull Request

Go to the original repository and click **New Pull Request**. Provide a clear description of your changes and link any related issues.

## Coding Standards

- **HTML**: Use semantic HTML5 elements. Keep markup clean and well-indented.
- **CSS**: Use descriptive class names. Follow BEM naming convention where applicable.
- **JavaScript**: Write clean, readable code. Use meaningful variable and function names.
- **Indentation**: Use 2 spaces for indentation.
- **Comments**: Add comments for complex logic. Keep comments concise and in English.
- **No Dependencies**: This is a zero-dependency project. Do not introduce any external libraries or frameworks.
- **Browser Compatibility**: Ensure all features work in modern browsers (Chrome, Firefox, Safari, Edge).

## Commit Message Convention

We follow the [Angular Commit Message Convention](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>
```

### Types

| Type       | Description                                                  |
|------------|--------------------------------------------------------------|
| `feat`     | A new feature                                                |
| `fix`      | A bug fix                                                    |
| `docs`     | Documentation only changes                                   |
| `style`    | Changes that do not affect the meaning of the code (formatting, etc.) |
| `refactor` | A code change that neither fixes a bug nor adds a feature    |
| `perf`     | A code change that improves performance                      |
| `test`     | Adding missing tests or correcting existing tests            |
| `chore`    | Changes to the build process or auxiliary tools and libraries |

### Examples

```
feat(editor): add syntax highlighting for code blocks
fix(preview): resolve rendering issue with nested lists
docs: update README with installation instructions
style: format CSS according to project conventions
refactor(core): simplify markdown parsing logic
```

## Reporting Issues

If you find a bug or have a feature request, please use our [issue templates](.github/ISSUE_TEMPLATE/) to file a new issue. Provide as much detail as possible to help us understand and address the issue.

## Pull Request Template

When submitting a PR, please include the following:

```markdown
## Description
A clear description of what this PR does and why it is needed.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Related Issues
Link any related issues here (e.g., Fixes #123).

## Testing
Describe how you tested your changes:
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in Edge

## Screenshots
If applicable, add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] I have tested my changes thoroughly
```

## Questions?

If you have any questions, feel free to open an issue with the `question` label. We'll do our best to help!

Thank you for your contributions!
