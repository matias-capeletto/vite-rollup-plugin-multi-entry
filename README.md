# Vite in Lib mode using Rollup Plugin Multi Entry

[@rollup/plugin-multi-entry](https://github.com/rollup/plugins/tree/master/packages/multi-entry)

Repro to report an issue for [Vite](https://github.com/vitejs/vite)

Build fails creating the output file with the same name for both es and umd formats
```
yarn
yarn build
```
