import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: ['.*\\.spec\\.ts$', '.*\\.e2e-spec\\.ts$', '.*\\.script\\.ts$'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/packages/'],
  moduleNameMapper: {
    '^packages/(.*)$': '<rootDir>/packages/$1/src',
  },
};

export default config;
