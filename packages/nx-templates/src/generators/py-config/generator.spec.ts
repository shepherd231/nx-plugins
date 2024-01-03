import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { pyConfigGenerator } from './generator';
import { PyConfigGeneratorSchema } from './schema';

describe('py-config generator', () => {
  let tree: Tree;
  const options: PyConfigGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await pyConfigGenerator(tree, options);
    expect(tree.exists('pyproject.toml')).toBeTruthy();
  });

  it('should create a backup of pyproject.toml if it exists', async () => {
    tree.write('pyproject.toml', '# some content');
    await pyConfigGenerator(tree, options);
    expect(tree.exists('pyproject.old.toml')).toBeTruthy();
  })
});
