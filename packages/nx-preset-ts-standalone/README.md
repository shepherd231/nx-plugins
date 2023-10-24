# @shepherd23/nx-preset-ts-standalone

This is a template for a typescript standalone project.

The standalone includes:

- [pnpm](https://pnpm.io/) as the package manager
- [lerna](https://lerna.js.org/) for versioning and changelog generation.
- [typescript](https://www.typescriptlang.org/) as the language.
- [jest](https://jestjs.io/) as the test runner.
- [eslint](https://eslint.org/) as the linter.
- [prettier](https://prettier.io/) as the code formatter.
- [husky](https://typicode.github.io/husky/#/) as the git hooks manager.
- [commitlint](https://commitlint.js.org/#/) as the commit message linter.
- [Github Actions](https://docs.github.com/actions) as the CI/CD tool.

## Template files

See `./files` for the template files.

## Usage

```bash
# `pnpm dlx` is equivalent to `npx`
pnpm dlx create-nx-workspace @shepherd23/nx-preset-ts-standalone <project-name>

# Navigate to the project
cd <project-name>

# Install dependencies
pnpm install
```

### Arguments

#### [Required] `project-name`

The name of the project to generate. 
