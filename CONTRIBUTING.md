# Contributing to Todoist

Thank you for your interest in contributing to this Todoist clone project! We welcome contributions from the community. Please follow the guidelines below to ensure a smooth contribution process.

## Branching Strategy

- **master**: The main branch containing stable, production-ready code
- **Feature branches**: Create feature branches from `master` using the naming convention `feature/description-of-feature`
- **Bug fix branches**: Create bug fix branches using the naming convention `bugfix/description-of-bug`
- **Hotfix branches**: For critical production fixes, use `hotfix/description-of-hotfix`

When creating a new branch:

```bash
git checkout -b feature/your-feature-name
```

## Commit Style

We follow conventional commit messages to maintain a clear and organized commit history.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, missing semicolons, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to build process, dependencies, or other non-code changes

### Examples

```
feat(tasks): add ability to filter tasks by priority

Implement a new filter dropdown that allows users to filter tasks
by their priority level (high, medium, low).

Closes #123
```

```
fix(auth): resolve login redirect issue

Users were being redirected to the wrong page after login.
Updated the redirect logic to use the correct route.

Fixes #456
```

```
docs(readme): update development setup instructions
```

## Pull Request Process

### Before Creating a Pull Request

1. **Create a feature branch** from `master`
2. **Make your changes** following the project's code style
3. **Write or update tests** for your changes
4. **Ensure all tests pass**:
   ```bash
   npm test
   ```
5. **Check code coverage** meets the 90% threshold
6. **Run linting** to ensure code quality:
   ```bash
   npm run lint
   ```
   (if available, or check with ESLint configuration)
7. **Commit your changes** using conventional commit messages
8. **Push your branch** to the repository

### Creating the Pull Request

1. **Go to the repository** on GitHub
2. **Click "New Pull Request"**
3. **Select your feature branch** as the source and `master` as the base
4. **Fill in the PR title** using a clear, descriptive format
5. **Write a detailed description** including:
   - What changes were made
   - Why these changes were made
   - How to test the changes
   - Any related issues (e.g., "Closes #123")
6. **Link any related issues** using GitHub's issue linking syntax
7. **Request reviewers** if applicable
8. **Submit the pull request**

### PR Title Format

Use a clear, descriptive title that follows this format:

```
[Type] Brief description of changes
```

Examples:
- `[Feature] Add task priority filtering`
- `[Fix] Resolve login redirect issue`
- `[Docs] Update README with development setup`

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
How to test these changes:
1. Step 1
2. Step 2

## Related Issues
Closes #123

## Checklist
- [ ] Tests pass
- [ ] Code coverage is 90% or above
- [ ] Code follows project style guidelines
- [ ] Documentation has been updated
```

### Code Review

- At least one approval is required before merging
- Address any feedback from reviewers
- Keep the conversation professional and constructive
- Once approved, the PR can be merged to `master`

## Code Style

This project uses:

- **ESLint** for JavaScript linting
- **Prettier** for code formatting
- **SCSS** for styling

Ensure your code follows these standards before submitting a PR.

## Testing

- Write tests for new features and bug fixes
- Maintain at least 90% code coverage
- Use React Testing Library for component tests
- Run tests frequently during development:
  ```bash
  npm test
  ```

## Questions or Need Help?

If you have questions or need help with the contribution process:

1. Check existing issues and pull requests
2. Open a new issue with your question
3. Provide as much context as possible

## Code of Conduct

Please be respectful and constructive in all interactions. We are committed to providing a welcoming and inclusive environment for all contributors.

Thank you for contributing!
