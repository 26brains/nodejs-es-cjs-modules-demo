# Node.js - ES and Common JS modules

## YouTube tutorial

https://www.youtube.com/watch?v=MCslD_9TJWk

## Things covered

- es modules: https://nodejs.org/api/esm.html
- common js modules: https://nodejs.org/api/modules.html#modules-commonjs-modules
- monorepo using NPM workspaces: https://docs.npmjs.com/cli/v7/using-npm/workspaces

## Errors you might have seen

```
Error [ERR_REQUIRE_ESM]: require() of ES Module xyz.js from abc.js not supported.
Instead change the require of mod-esm.js in abc.js to a dynamic import() which is available in all CommonJS modules.
```
```
(node:10957) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

```

## Install

`npm i`

## Run

For CJS app:
`node packages/app-cjs/app-cjs.js`

For ESM app:
`node packages/app-cjs/app-cjs.js`
