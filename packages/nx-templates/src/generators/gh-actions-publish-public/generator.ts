import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GhActionsPublishPublicGeneratorSchema } from './schema';

export async function ghActionsPublishPublicGenerator(
  tree: Tree,
  options: GhActionsPublishPublicGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files'), '.', options);
  await formatFiles(tree);
}

export default ghActionsPublishPublicGenerator;
