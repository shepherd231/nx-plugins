#!/bin/bash

# Simple script that publishes the package to the npm registry.
#
# Note that this script assumes that the .npmrc file is located in the same directory as this script execution context
# and that the .npmrc file contains the npm token.
#
# Required arguments:
#   PACKAGE_PATH: Path of the package. The path should contain a package.json file.

# Stop on error
set -e

# If PACKAGE_PATH is not defined, exit
PACKAGE_PATH="$1"
if [ -z "$PACKAGE_PATH" ]; then
    echo "PACKAGE_PATH is not defined"
    exit 1
fi

# Copy .npmrc file to the package path
#
# This assumes that the .npmrc file is located in the same directory as this script execution context
# and that the .npmrc file contains the npm token
cp .npmrc $PACKAGE_PATH

# Navigate to the package path
cd $PACKAGE_PATH

# Get the package name from the package.json file
package_name=$(node -pe "require('./package.json').name")

# If no package name is defined, exit
if [ -z "$package_name" ]; then
    echo "package_name is not defined. Check if the package.json file exists in $PACKAGE_PATH and if it contains a name field."
    exit 1
fi

# Check if the package is already published
published_version=$(pnpm view $package_name version || echo "0.0.0")
current_version=$(node -pe "require('./package.json').version")

if [ "$published_version" = "$current_version" ]; then
    # If the package is already published, do nothing
    echo "$package_name is already published"
else
    # If the package is not published, publish it
    echo "Publishing $package_name"
    pnpm publish
fi

# Clean up manipulations
rm .npmrc
