#!/bin/bash

### Grabs your home dir for access to .nvm dir, sources nvm shell script
### to ensure synced functions and configurations, then assigns node
### version 18.16.0 for consistency among team, should ensure CI builds
export NVM_DIR=$HOME/.nvm && source $NVM_DIR/nvm.sh && nvm use v18.16.0

### If node_modules is not present, then install dependencies
if [ ! -d "node_modules" ] || git diff --quiet --exit-code -- package.json ; then
    npm i
fi

### Start development server with Next.js
npm run dev