export interface HttpClientJsGeneratorSchema {
  name: string;
  path?: string;
}

export interface HttpClientJsGeneratorOptions extends HttpClientJsGeneratorSchema {
  /**
   * @description
   * Value of {@link HttpClientJsGeneratorSchema.name} without namespace (the scope)
   */
  name: string;
  /**
   * @description
   * Value of {@link HttpClientJsGeneratorSchema.name}
   */
  packageName: string;
  repoRoot: string;
  pascalCasedName: string;
  camelCasedName: string;
}