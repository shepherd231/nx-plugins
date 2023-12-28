import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { tsMinimalGenerator } from './generator';
import { TsMinimalGeneratorSchema } from './schema';

describe('ts-minimal generator', () => { 
  describe('ts-minimal generator (ordinary name)', () => {
    let tree: Tree;
    const options: TsMinimalGeneratorSchema = { name: 'test' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await tsMinimalGenerator(tree, options);
    });
  
    it('should run successfully', () => {
      const config = readProjectConfiguration(tree, options.name);
      expect(config).toBeDefined();
    });
  
    it(`should have name of ${options.name} in package.json`, () => {
      const packageJson = JSON.parse(tree.read('packages/test/package.json').toString());
      expect(packageJson.name).toEqual(options.name);
      
      const projectJson = JSON.parse(tree.read('packages/test/project.json').toString());
      expect(projectJson.name).toEqual(options.name);
    })
  });
  
  describe('ts-minimal generator (namespaced package name)', () => {
    let tree: Tree;
    const options: TsMinimalGeneratorSchema = { name: '@namespace/test' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await tsMinimalGenerator(tree, options);
    });
  
    it('should run successfully', () => {
      const config = readProjectConfiguration(tree, options.name);
      expect(config).toBeDefined();
    });
  
    it(`should have name of ${options.name} in package.json`, () => {
      const packageJson = JSON.parse(tree.read('packages/test/package.json').toString());
      expect(packageJson.name).toEqual(options.name);
      
      const projectJson = JSON.parse(tree.read('packages/test/project.json').toString());
      expect(projectJson.name).toEqual(options.name);
    })
  })
  
  describe('ts-minimal generator (has path option)', () => {
    let tree: Tree;
    const options: TsMinimalGeneratorSchema = { name: '@namespace/test', path: 'libs/test-lib' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await tsMinimalGenerator(tree, options);
    });
  
    it('should run successfully', () => {
      const config = readProjectConfiguration(tree, options.name);
      expect(config).toBeDefined();
    });
  
    it(`should have name of ${options.name} in package.json`, () => {
      const packageJson = JSON.parse(tree.read(`${options.path}/package.json`).toString());
      expect(packageJson.name).toEqual(options.name);
      
      const projectJson = JSON.parse(tree.read(`${options.path}/project.json`).toString());
      expect(projectJson.name).toEqual(options.name);
    })
  })
 })