import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { ghaReleaseGenerator } from './generator';
import { GhaReleaseGeneratorSchema } from './schema';

describe('gharelease generator', () => {
  let tree: Tree;
  const options: GhaReleaseGeneratorSchema = {};

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ghaReleaseGenerator(tree, options);
    expect(tree.exists('release-please-config.json')).toBeTruthy();
  });
});
