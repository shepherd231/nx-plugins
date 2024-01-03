import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { ghaPublishGenerator } from './generator';
import { GhaPublishGeneratorSchema } from './schema';

describe('gha-publish generator', () => {
  let tree: Tree;
  
  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });
  
  it('should run successfully with node-pnpm mode', async () => {
    const options: GhaPublishGeneratorSchema = { language: "node", packageManager: "pnpm" };
    await ghaPublishGenerator(tree, options);
    expect(tree.exists('.github/workflows/publish-node.yaml')).toBeTruthy();
  });
  
  it('should run successfully with python-poetry mode', async () => {
    const options: GhaPublishGeneratorSchema = { language: "python", packageManager: "poetry" };
    await ghaPublishGenerator(tree, options);
    expect(tree.exists('.github/workflows/publish-python.yaml')).toBeTruthy();
  });
});
