import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { ghaPublicGenerator } from './generator';
import { GhaPublicGeneratorSchema } from './schema';

describe('ghapublic generator', () => {
  let tree: Tree;
  const options: GhaPublicGeneratorSchema = { org: "test-org", repo: "test-repo" };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ghaPublicGenerator(tree, options);
    expect(tree.exists('.github/CONTRIBUTING.md')).toBeTruthy();
  });
});
