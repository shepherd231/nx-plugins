import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PySubmoduleGeneratorSchema } from './schema';

export async function pySubmoduleGenerator(
  tree: Tree,
  options: PySubmoduleGeneratorSchema
) {
  const parent = options.parent || 'packages';
  const projectRoot = `${parent}/${options.name}`;
  
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default pySubmoduleGenerator;
