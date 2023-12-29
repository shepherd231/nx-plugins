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
  options: JtdMinimalGeneratorSchema
) {
  const projectRoot = options.path;
  const projectName = options.name || projectRoot.replace(/\//g, '-');
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
