import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { pyMinimalGenerator } from './generator';
import { PyMinimalGeneratorSchema } from './schema';

describe('py-minimal generator', () => {

  describe('py-minimal generator (ordinary name)', () => {
    let tree: Tree;
    const options: PyMinimalGeneratorSchema = { name: 'test' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await pyMinimalGenerator(tree, options);
    });
  
    it('should run successfully', async () => {
      const config = readProjectConfiguration(tree, 'test');
      expect(config).toBeDefined();
    });

    it(`should have name of ${options.name} in package.json`, () => {
      const packageJson = JSON.parse(tree.read(`packages/test/package.json`).toString());
      expect(packageJson.name).toEqual(options.name);
      
      const projectJson = JSON.parse(tree.read(`packages/test/project.json`).toString());
      expect(projectJson.name).toEqual(options.name);
    })
  })

  describe('py-minimal generator (has path option)', () => {
    let tree: Tree;
    const options: PyMinimalGeneratorSchema = { name: 'test', path: 'some/subdir' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await pyMinimalGenerator(tree, options);
    });
  
    it('should run successfully', async () => {
      const config = readProjectConfiguration(tree, 'test');
      expect(config).toBeDefined();
    });

    it(`should have name of ${options.name} in package.json`, () => {
      const packageJson = JSON.parse(tree.read(`${options.path}/package.json`).toString());
      expect(packageJson.name).toEqual(options.name);
      
      const projectJson = JSON.parse(tree.read(`${options.path}/project.json`).toString());
      expect(projectJson.name).toEqual(options.name);
    })
  })
});
