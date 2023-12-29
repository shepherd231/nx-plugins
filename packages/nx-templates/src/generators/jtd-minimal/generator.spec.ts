import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { jtdMinimalGenerator } from './generator';
import { JtdMinimalGeneratorSchema } from './schema';

describe('jtd-minimal generator', () => { 
  describe('jtd-minimal generator (path only)', () => {
    let tree: Tree;
    let projectName: string;
    const options: JtdMinimalGeneratorSchema = { path: 'interface/test-interface' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await jtdMinimalGenerator(tree, options);
      projectName = options.path.replace(/\//g, '-');
    });
  
    it('should run successfully', () => {
      const config = readProjectConfiguration(tree, projectName);
      expect(config).toBeDefined();
      expect(tree.exists(`${options.path}/jtd-codebuild.json`)).toBeTruthy();
    });
  });
  
  describe('jtd-minimal generator (has name)', () => {
    let tree: Tree;
    const options: JtdMinimalGeneratorSchema = { path: 'libs/test-lib', name: 'some-lib-name' };
  
    beforeAll(async () => {
      tree = createTreeWithEmptyWorkspace();
      await jtdMinimalGenerator(tree, options);
    });
  
    it('should run successfully', () => {
      const config = readProjectConfiguration(tree, options.name);
      expect(config).toBeDefined();
      expect(tree.exists(`${options.path}/jtd-codebuild.json`)).toBeTruthy();
    });
    
    it(`should have name of ${options.name} in project.json`, () => {
      const projectJson = JSON.parse(tree.read(`${options.path}/project.json`).toString());
      expect(projectJson.name).toEqual(options.name);
    })
  })
 })