import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PyConfigGeneratorSchema } from './schema';

const filesToUpdate = ['pyproject.toml'];

export async function pyConfigGenerator(
  tree: Tree,
  options: PyConfigGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files'), '.', options);
  await formatFiles(tree);
}

export default pyConfigGenerator;
