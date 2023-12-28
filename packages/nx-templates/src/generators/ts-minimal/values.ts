export const targets = {
  "clean": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm rimraf dist .tsbuildinfo ../../dist",
      "cwd": "client/js"
    }
  },
  "typecheck": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm tsc --noEmit",
      "cwd": "client/js"
    }
  },
  "build": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm tsc --project tsconfig.build.json",
      "cwd": "client/js"
    }
  },
  "login": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm dlx google-artifactregistry-auth",
      "cwd": "client/js"
    }
  },
  "publish": {
    "executor": "nx:run-commands",
    "options": {
      "command": "pnpm publish --no-git-checks || echo 'Already published: client/js'",
      "cwd": "client/js"
    }
  },
  "test": {
    "executor": "@nx/jest:jest",
    "outputs": [
      "{workspaceRoot}/coverage/{projectRoot}"
    ],
    "options": {
      "jestConfig": "client/js/jest.config.ts"
    }
  }
}
