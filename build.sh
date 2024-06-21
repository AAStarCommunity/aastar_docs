 #!/usr/bin/env sh

# ignore error
set -e

# build
npm run docs:build

# Enter the directory to be published.
cd docs/.vitepress/dist
