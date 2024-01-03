import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { tsConfigGenerator } from './generator';
import { TsConfigGeneratorSchema } from './schema';

describe('ts-config generator', () => {
  let tree: Tree;
  const options: TsConfigGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await tsConfigGenerator(tree, options);
    expect(tree.exists('package.json')).toBeTruthy();
  });

  it('should create a backup of package.json if it exists', async () => {
    tree.write('package.json', '{}');
    await tsConfigGenerator(tree, options);
    expect(tree.exists('package.old.json')).toBeTruthy();
  })
});
