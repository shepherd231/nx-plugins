# @shepherd23/nx-templates:py-submodule

This is a python library template
that contains `project.json` file so that it can be managed by `nx`
but no `package.json` and `CHANGELOG.md` so that no versioning processes
are applied to the module.

## Template files

See `./files` for the template files.

## Usage

```bash
# Install @shepherd23/nx-templates
pnpm add -D @shepherd23/nx-templates

# Generate a new project with the template
pnpm nx g @shepherd23/nx-templates:py-submodule <project-name> [options]
```

### Arguments

#### [Required] `project-name`

The name of the project to generate. 

```bash
pnpm nx g @shepherd23/nx-templates:py-submodule my-package
```

#### [Optional] `path`

The path directory to generate the project. 

Defaults to `packages/${name}`.

You can specify the path directory with `--path` option. For example, the command below

```bash
pnpm nx g @shepherd23/nx-templates:py-submodule my-package --path=libs/package
```

will produce a `package` directory under the `libs/package` directory.
