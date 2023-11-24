import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { ghActionsPublishGenerator } from './generator';
import { GhActionsPublishGeneratorSchema } from './schema';

describe('gh-actions-publish generator', () => {
  let tree: Tree;
  const options: GhActionsPublishGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ghActionsPublishGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
