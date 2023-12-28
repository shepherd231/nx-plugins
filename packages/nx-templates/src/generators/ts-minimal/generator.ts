import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { TsMinimalGeneratorOptions, TsMinimalGeneratorSchema } from './schema';
import { targets } from './values';

const getRepoRootPath = (folderPath: string) => {
  return new Array(folderPath.split('/').length).fill("..").join('/');
}

export async function tsMinimalGenerator(
  tree: Tree,
  userOptions: TsMinimalGeneratorSchema
) {
  const projectRoot = userOptions.path || `packages/${userOptions.name.split('/').pop()}`

  const options: TsMinimalGeneratorOptions = {
    ...userOptions,
    repoRoot: getRepoRootPath(projectRoot),
  }

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: targets,
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default tsMinimalGenerator;
