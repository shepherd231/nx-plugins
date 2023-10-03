import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PyMinimalGeneratorSchema } from './schema';

export async function pyMinimalGenerator(
  tree: Tree,
  options: PyMinimalGeneratorSchema
) {
  const folderName = options.name.split('/').pop();
  const parent = options.parent || 'packages';
  const projectRoot = `${parent}/${folderName}`;
  const prefix = options.prefix || "";
  const name = `${prefix}${folderName}`
  options = {
    name,
    parent,
    prefix, 
  }
  
  addProjectConfiguration(tree, name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {
      "add": {
        "executor": "nx:run-commands",
        "options": {
          "command": "poetry add --group aml-utils",
          "parallel": false
        }
      },
      "update": {
        "executor": "nx:run-commands",
        "options": {
          "command": "poetry update --only aml-utils",
          "parallel": false
        }
      },
      "remove": {
        "executor": "nx:run-commands",
        "options": {
          "command": "poetry remove --group aml-utils",
          "parallel": false
        }
      }
    },
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default pyMinimalGenerator;
