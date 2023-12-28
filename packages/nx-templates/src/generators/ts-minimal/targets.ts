interface CreateTsMinimalTargetsOptions {
  cwd: string;
  repoRoot: string;
}

export const createTsMinimalTargets = (options: CreateTsMinimalTargetsOptions) => ({
  "clean": {
    "executor": "nx:run-commands",
    "options": {
      "command": `pnpm rimraf dist .tsbuildinfo ${options.repoRoot}/dist`,
      "cwd": options.cwd
    }
  },
  "typecheck": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm tsc --noEmit",
      "cwd": options.cwd
    }
  },
  "build": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm tsc --project tsconfig.build.json",
      "cwd": options.cwd
    }
  },
  "login": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm dlx google-artifactregistry-auth",
      "cwd": options.cwd
    }
  },
  "publish": {
    "executor": "nx:run-commands",
    "options": {
      "command": `pnpm publish --no-git-checks || echo 'Already published: ${options.cwd}'`,
      "cwd": options.cwd
    }
  },
  "test": {
    "executor": "@nx/jest:jest",
    "outputs": [
      "{workspaceRoot}/coverage/{projectRoot}"
    ],
    "options": {
      "jestConfig": `${options.cwd}/jest.config.ts`
    }
  }
}
)