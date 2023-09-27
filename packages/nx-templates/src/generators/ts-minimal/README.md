# @shepherd23/nx-templates:ts-minimal

This is a minimal typescript library subpackage template for monorepo projects.

## Template files

See `./files` for the template files.

## Usage

```bash
# Install @shepherd23/nx-templates
pnpm add -D @shepherd23/nx-templates

# Generate a new project with the template
pnpm nx g @shepherd23/nx-templates:ts-minimal <project-name> [options]
```

### Arguments

#### [Required] `project-name`

The name of the project to generate. 

If namespaced with `@`, it will be used as the package name. For example, the command below

```bash
pnpm nx g @shepherd23/nx-templates:ts-minimal @project/package
```

will produce a project with the name (at the package.json) as-is: `@project/package`, and the project directory name as `package` under the [parent](#optional-parent) option value.

### Options

#### [Optional] `parent`

The parent directory to generate the project. 

Defaults to `packages`.

You can specify the parent directory with `--parent` option. For example, the command below

```bash
pnpm nx g @shepherd23/nx-templates:ts-minimal @project/package --parent=libs
```

will produce a `package` directory under the `libs` directory.
