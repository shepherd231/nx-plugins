import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GhaPublishGeneratorSchema } from './schema';

function selectTemplateFilesPath(
  options: GhaPublishGeneratorSchema
) {
  const { language, packageManager } = options;
  const templateType = `${language}-${packageManager}`;
  switch (templateType) {
    case "node-pnpm":
    case "python-poetry":
      return path.join(__dirname, 'files', templateType);
    default:
      break;
  }
}

export async function ghaPublishGenerator(
  tree: Tree,
  options: GhaPublishGeneratorSchema
) {
  generateFiles(tree, selectTemplateFilesPath(options), '.', options);
  await formatFiles(tree);
}

export default ghaPublishGenerator;
