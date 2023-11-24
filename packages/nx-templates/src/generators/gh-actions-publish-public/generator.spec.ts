import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { ghActionsPublishPublicGenerator } from './generator';
import { GhActionsPublishPublicGeneratorSchema } from './schema';

describe('gh-actions-publish-public generator', () => {
  let tree: Tree;
  const options: GhActionsPublishPublicGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ghActionsPublishPublicGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
