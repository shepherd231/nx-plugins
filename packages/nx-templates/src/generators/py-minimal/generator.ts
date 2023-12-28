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
  const projectRoot = options.path || `packages/${options.name}`
  
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default pyMinimalGenerator;
