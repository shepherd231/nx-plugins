import type { Tree } from '@nx/devkit';

/**
 * Reads a text file, removes all comments and parses text.
 * If the file does not exist, returns null.
 * 
 * @param tree - file system tree
 * @param path - file path
 */
export function readTextFileOrNull(
  tree: Tree,
  path: string,
): string | null {
  if (!tree.exists(path)) {
    return null;
  }
  try {
    return tree.read(path, 'utf-8');
  } catch (e) {
    throw new Error(`Cannot parse ${path}: ${e.message}`);
  }
}

/**
 * Reads a text file, removes all comments and parses text.
 *
 * @param tree - file system tree
 * @param path - file path
 */
export function readTextFile(
  tree: Tree,
  path: string,
): string {
  if (!tree.exists(path)) {
    throw new Error(`Cannot find ${path}`);
  }
  try {
    return tree.read(path, 'utf-8');
  } catch (e) {
    throw new Error(`Cannot parse ${path}: ${e.message}`);
  }
}

/**
 * Writes a text value to the file system tree

 * @param tree File system tree
 * @param path Path of text file in the Tree
 * @param value Serializable value to write
 */
export function writeTextFile(
  tree: Tree,
  path: string,
  value: string,
): void {
  tree.write(path, value);
}

/**
 * Updates a text value to the file system tree
 *
 * @param tree File system tree
 * @param path Path of text file in the Tree
 * @param updater Function that maps the current value of a text document to a new value to be written to the document
 */
export function updateTextFile(
  tree: Tree,
  path: string,
  updater: (value: string) => string,
): void {
  const updatedValue = updater(readTextFile(tree, path));
  writeTextFile(tree, path, updatedValue);
}
