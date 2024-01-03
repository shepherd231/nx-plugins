import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { presetGenerator } from './generator';
import { PresetGeneratorSchema } from './schema';

describe('preset generator', () => {
  let tree: Tree;
  const options: PresetGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await presetGenerator(tree, options);
    expect(tree.exists('package.json')).toBeTruthy();
    expect(tree.exists('pnpm-workspace.yaml')).toBeTruthy();
  });
});
