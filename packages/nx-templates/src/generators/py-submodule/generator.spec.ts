import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { pySubmoduleGenerator } from './generator';
import { PySubmoduleGeneratorSchema } from './schema';

describe('py-submodule generator', () => {

  describe('py-submodule generator (ordinary name)', () => {
    let tree: Tree;
    const options: PySubmoduleGeneratorSchema = { name: 'test' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await pySubmoduleGenerator(tree, options);
    });
  
    it('should run successfully', async () => {
      const config = readProjectConfiguration(tree, 'test');
      expect(config).toBeDefined();
    });

    it('should generate folder `packages/test`', () => {
      expect(tree.exists('packages/test/__init__.py')).toBeTruthy();
    });
  })

  describe('py-submodule generator (has path option)', () => {
    let tree: Tree;
    const options: PySubmoduleGeneratorSchema = { name: 'test', path: 'some/subdir' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await pySubmoduleGenerator(tree, options);
    });
  
    it('should run successfully', async () => {
      const config = readProjectConfiguration(tree, 'test');
      expect(config).toBeDefined();
    });

    it(`should generate folder ${options.path}`, () => {
      expect(tree.exists(`${options.path}/__init__.py`)).toBeTruthy();
    });
  })
});
