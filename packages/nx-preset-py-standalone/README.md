# @shepherd23/nx-preset-py-standalone

This is a template for a python standalone project.

The standalone includes:

- [poetry](https://python-poetry.org/docs/) as the package manager
- [python](https://www.python.org/) as the programming language
- [pre-commit](https://pre-commit.com/) as the git hook manager
- [commitizen](https://commitizen-tools.github.io/commitizen/) as the commit message helper
- [black](https://black.readthedocs.io/en/stable/) as the code formatter
- [flake8](https://flake8.pycqa.org/en/latest/) as the linter
- [Github Actions](https://docs.github.com/actions) as the CI/CD tool.

## Template files

See `./files` for the template files.

## Usage

```bash
# `pnpm dlx` is equivalent to `npx`
pnpm dlx create-nx-workspace @shepherd23/nx-preset-py-standalone <project-name>

# Navigate to the project
cd <project-name>

# Install dependencies
poetry install

# Install git hooks
poetry run pre-commit install
```

### Arguments

#### [Required] `project-name`

The name of the project to generate. 
