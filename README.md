# ES and Common JS modules

## Things covered

- es modules: https://nodejs.org/api/esm.html
- common js modules: https://nodejs.org/api/modules.html#modules-commonjs-modules
- monorepo using NPM workspaces: https://docs.npmjs.com/cli/v7/using-npm/workspaces

## Errors you might have seen

```
Error [ERR_REQUIRE_ESM]: require() of ES Module xyz.js from abc.js not supported.
Instead change the require of mod-esm.js in abc.js to a dynamic import() which is available in all CommonJS modules.
```

## Install

`npm i`

## Run

For CJS app:
`node packages/app-cjs/app-cjs.js`

For ESM app:
`node packages/app-cjs/app-cjs.js`
