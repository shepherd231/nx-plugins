import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { pySubmoduleGenerator } from './generator';
import { PySubmoduleGeneratorSchema } from './schema';

describe('py-submodule generator', () => {
  let tree: Tree;
  const options: PySubmoduleGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await pySubmoduleGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
