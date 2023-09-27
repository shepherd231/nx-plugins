/**
 * @description
 * Interface for the ts-minimal generator options.
 * 
 * Checkout for [README.md](./README.md) for each argument usage.
 */
export interface TsMinimalGeneratorSchema {
  name: string;
  parent?: string;
}

export interface TsMinimalGeneratorOptions extends TsMinimalGeneratorSchema {
  /**
   * @description
   * The root path of the monorepo project relative to the package root.
   * 
   * This is used for injecting root tsconfig path into the generated files.
   */
  repoRoot: string;
}
