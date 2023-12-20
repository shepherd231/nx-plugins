import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GhaPublicGeneratorSchema } from './schema';

export async function ghaPublicGenerator(
  tree: Tree,
  options: GhaPublicGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files'), '.', options);
  await formatFiles(tree);
}

export default ghaPublicGenerator;
