import { Tree } from "@nx/devkit";
import { readTextFileOrNull } from "./file";
import { basename, dirname, extname, join } from "path";

export const backupFile = (tree: Tree, filePath: string) => {
  const file = readTextFileOrNull(tree, filePath);
  const ext = extname(filePath);
  const dir = dirname(filePath);
  const filename = basename(filePath, ext);
  const backupFilePath = join(dir, `${filename}.old${ext}`);
  if (file) {
    tree.write(backupFilePath, file);
    console.info(
      `Created backup of ${filePath} as ${backupFilePath}.\n`
      + `Merge changes into ${filePath} and delete ${backupFilePath}.`
    );
  }
}