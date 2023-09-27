import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { TsMinimalGeneratorOptions, TsMinimalGeneratorSchema } from './schema';

const getRepoRootPath = (parent: string) => {
  return new Array(parent.split('/').length + 1).fill("..").join('/');
}

export async function tsMinimalGenerator(
  tree: Tree,
  userOptions: TsMinimalGeneratorSchema
) {
  const folderName = userOptions.name.split('/').pop();
  const parent = userOptions.parent || 'packages';
  const projectRoot = `${parent}/${folderName}`;

  const options: TsMinimalGeneratorOptions = {
    ...userOptions,
    repoRoot: getRepoRootPath(parent),
  }

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default tsMinimalGenerator;
