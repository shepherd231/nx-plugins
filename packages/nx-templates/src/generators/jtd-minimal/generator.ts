import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { JtdMinimalGeneratorSchema } from './schema';
import { createJtdMinimalTargets } from './targets';

export async function jtdMinimalGenerator(
  tree: Tree,
  userOptions: JtdMinimalGeneratorSchema
) {
  const projectRoot = userOptions.path;
  const projectName = userOptions.name || projectRoot.replace(/\//g, '-');
  const options: Required<JtdMinimalGeneratorSchema> = {
    path: projectRoot,
    name: projectName,
  }
  addProjectConfiguration(tree, projectName, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: createJtdMinimalTargets({ cwd: projectRoot }),
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default jtdMinimalGenerator;
