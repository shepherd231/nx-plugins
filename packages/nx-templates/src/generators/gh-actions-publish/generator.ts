import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GhActionsPublishGeneratorSchema } from './schema';

export async function ghActionsPublishGenerator(
  tree: Tree,
  options: GhActionsPublishGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files'), '.', options);
  await formatFiles(tree);
}

export default ghActionsPublishGenerator;
