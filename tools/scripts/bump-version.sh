#!/bin/bash

# Simple script that bumps the version of this repo.
#
# Useful Materials:
#   What is version bump: https://stackoverflow.com/questions/4181185/what-does-bump-version-stand-for
#   Semantic versioning: https://semver.org/
#   Publish npm library: https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

# Stop if there's any error
set -e

# Set git config
git config --local user.email "actions@github.com"
git config --local user.name "Github Actions"

# Version bump powered by lerna.
pnpm lerna version -y

# Commit additional changes made by the version bump
#
# TODO: Seems like this is not needed anymore, but I'm not sure.
#       I'll leave it here for now, but we should remove it if it's not needed.
git add -A
git commit -m "chore: bump version [skip ci]" || true
