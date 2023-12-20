type NodePackageManager = "npm" | "yarn" | "pnpm";
type PythonPackageManager = "pip" | "poetry";

export interface GhaPublishGeneratorSchema {
  language: "python" | "node";
  packageManager: NodePackageManager | PythonPackageManager;
}
