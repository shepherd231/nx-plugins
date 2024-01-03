import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import { TsConfigGeneratorSchema } from './schema';
import { readdirSync } from 'fs';
import { join } from 'path';
import { backupFile } from '../../utils';

const filesToBackup = readdirSync(
    join(__dirname, 'files'),
    { withFileTypes: true },
  )
  .filter((dirent) => dirent.isFile())
  .map((dirent) => dirent.name)
  .map((filename) => filename.replace('.template', ''));

export async function tsConfigGenerator(
  tree: Tree,
  options: TsConfigGeneratorSchema
) {
  // If each files to backup exists, create a backup
  filesToBackup.forEach((filepath) => backupFile(tree, filepath));

  // Generate files for the project
  generateFiles(tree, join(__dirname, 'files'), '.', options);

  // Format files
  await formatFiles(tree);
}

export default tsConfigGenerator;
