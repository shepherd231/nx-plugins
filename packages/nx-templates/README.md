# @shepherd23/nx-templates

Set of templates for different types of projects fit for our project requirements.

Checkout `src/generators/*` for available templates.

## Usage

See each template's README.md for each template's usage.

## Development

You can generate boilerplate of generator by the following command.

```bash
nx generate @nx/plugin:generator <generator-name>
```

`src/generators/*` includes all the templates. Each template is a boilerplate generator powered by `nx`.

See [Write a simple generator](https://nx.dev/extending-nx/recipes/local-generators) and [Creating files](https://nx.dev/extending-nx/recipes/creating-files) to obtain the sense of how it works.

## Materials

Useful materials related with this repository.

- create-nx-plugin: https://nx.dev/extending-nx/recipes/create-preset#create-a-custom-plugin-preset
- Write a simple generator: https://nx.dev/extending-nx/recipes/local-generators
- Creating files: https://nx.dev/extending-nx/recipes/creating-files
- Customizing generator options: https://nx.dev/extending-nx/recipes/generator-options

## TODO

- List depencency group for CI, reduces package installation time.
- Add `ts-monorepo`: Typescript monorepo setup with pnpm, nx, jest, lerna, commitlint, husky, eslint, prettier preconfigured.
- Add `py-monorepo`: Python monorepo setup with pnpm, nx, pytest, commitlint, husky, pylint, pre-commit preconfigured.

