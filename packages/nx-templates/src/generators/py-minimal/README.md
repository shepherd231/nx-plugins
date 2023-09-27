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

#### [Optional] `parent`

The parent directory to generate the project. 

Defaults to `packages`.

You can specify the parent directory with `--parent` option. For example, the command below

```bash
pnpm nx g @shepherd23/nx-templates:py-minimal my-package --parent=libs
```

will produce a `my-package` directory under the `libs` directory.

### [Optional] `prefix`

The prefix to apply to package name of the project.

This option is useful when you want to name the project with a prefix but want to exclude the prefix from the directory name.

For example:

```bash
pnpm nx g @shepherd23/nx-templates:py-minimal my-package --prefix=my-org-
```

will produce a `my-package` directory under the `packages` directory, but the package name will be `my-org-my-package`.
