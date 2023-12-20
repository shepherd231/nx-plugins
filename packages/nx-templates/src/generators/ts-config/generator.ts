import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { TsConfigGeneratorSchema } from './schema';

export async function tsConfigGenerator(
  tree: Tree,
  options: TsConfigGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files'), '.', options);
  await formatFiles(tree);
}

export default tsConfigGenerator;
