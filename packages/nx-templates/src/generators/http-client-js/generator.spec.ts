import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { httpClientJsGenerator } from './generator';
import { HttpClientJsGeneratorSchema } from './schema';

describe('http-client-js generator', () => { 
  describe('http-client-js generator (ordinary name)', () => {
    let tree: Tree;
    const options: HttpClientJsGeneratorSchema = { name: 'test' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await httpClientJsGenerator(tree, options);
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
  
  describe('http-client-js generator (namespaced package name)', () => {
    let tree: Tree;
    const options: HttpClientJsGeneratorSchema = { name: '@namespace/test' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await httpClientJsGenerator(tree, options);
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
  
  describe('http-client-js generator (has path option)', () => {
    let tree: Tree;
    const options: HttpClientJsGeneratorSchema = { name: '@namespace/test', path: 'libs/test-lib' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await httpClientJsGenerator(tree, options);
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