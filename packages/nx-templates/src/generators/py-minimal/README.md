# @shepherd23/nx-templates:py-minimal

This is a minimal python library subpackage template for monorepo projects.

## Template files

See `./files` for the template files.

## Usage

```bash
# Install @shepherd23/nx-templates
pnpm add -D @shepherd23/nx-templates

# Generate a new project with the template
pnpm nx g @shepherd23/nx-templates:py-minimal <project-name> [options]
```

### Arguments

#### [Required] `project-name`

The name of the project to generate. 

```bash
pnpm nx g @shepherd23/nx-templates:py-minimal my-package
```

### Options

#### [Optional] `path`

The path directory to generate the project. 

Defaults to `packages/${name}`.

You can specify the path directory with `--path` option. For example, the command below

```bash
pnpm nx g @shepherd23/nx-templates:py-minimal my-package --path=libs/package
```

will produce a `package` directory under the `libs/package` directory.
