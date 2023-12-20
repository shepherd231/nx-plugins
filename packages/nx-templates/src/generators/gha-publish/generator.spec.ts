import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { ghaPublishGenerator } from './generator';
import { GhaPublishGeneratorSchema } from './schema';

describe('gh-actions-publish generator', () => {
  let tree: Tree;
  const options: GhaPublishGeneratorSchema = { language: "node", packageManager: "pnpm" };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ghaPublishGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
