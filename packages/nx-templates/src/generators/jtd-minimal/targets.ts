interface CreateJtdMinimalTargetsOptions {
  cwd: string;
}

export const createJtdMinimalTargets = (options: CreateJtdMinimalTargetsOptions) => ({
  "build": {
    "executor": "nx:run-commands",
    "options": {
      "command": "poetry run jtd-codebuild .",
      "cwd": options.cwd
    }
  },
  "clear": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm rimraf gen",
      "cwd": options.cwd
    }
  }
})
