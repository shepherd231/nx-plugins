import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GhaReleaseGeneratorSchema } from './schema';

export async function ghaReleaseGenerator(
  tree: Tree,
  options: GhaReleaseGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files'), '.', options);
  await formatFiles(tree);
}

export default ghaReleaseGenerator;
