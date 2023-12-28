import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as Case from 'case';
import * as path from 'path';
import { HttpClientJsGeneratorOptions, HttpClientJsGeneratorSchema } from './schema';
import { createHttpClientJsTargets } from './targets';

const getRepoRootPath = (folderPath: string) => {
  return new Array(folderPath.split('/').length).fill("..").join('/');
}

export async function httpClientJsGenerator(
  tree: Tree,
  userOptions: HttpClientJsGeneratorSchema
) {
  const name = userOptions.name.split('/').pop()
  const projectRoot = userOptions.path || `packages/${name}`

  const options: HttpClientJsGeneratorOptions = {
    ...userOptions,
    name: name,
    packageName: userOptions.name,
    repoRoot: getRepoRootPath(projectRoot),
    pascalCasedName: Case.pascal(name),
    camelCasedName: Case.camel(name),
  }

  addProjectConfiguration(tree, options.packageName, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: createHttpClientJsTargets({repoRoot: options.repoRoot, cwd: projectRoot}),
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default httpClientJsGenerator;
