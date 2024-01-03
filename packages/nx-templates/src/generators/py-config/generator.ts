import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import { PyConfigGeneratorSchema } from './schema';
import { backupFile } from '../../utils';
import { join } from 'path';

const filesToBackup = ['pyproject.toml']

export async function pyConfigGenerator(
  tree: Tree,
  options: PyConfigGeneratorSchema
) {
  // If each files to backup exists, create a backup
  filesToBackup.forEach((filepath) => backupFile(tree, filepath))

  // Generate files for the project
  generateFiles(tree, join(__dirname, 'files'), '.', options);
  
  // Format files
  await formatFiles(tree);
}

export default pyConfigGenerator;
