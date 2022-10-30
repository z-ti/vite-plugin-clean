import { defineBuildConfig } from 'unbuild'
export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  externals: [
    'vite',
    '@rollup/pluginutils',
  ],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
