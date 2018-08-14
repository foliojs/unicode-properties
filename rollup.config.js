import babel from 'rollup-plugin-babel'
import { dependencies } from './package.json'

const cjs = {
  exports: 'named',
  format: 'cjs'
}

const esm = {
  format: 'es'
}

const getCJS = override => Object.assign({}, cjs, override)
const getESM = override => Object.assign({}, esm, override)

const configBase = {
  input: './index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [["es2015", { modules: false }]],
      plugins: [ 'external-helpers'],
      exclude: 'node_modules/**'
    })
  ],
  external: Object.keys(dependencies).concat([
    'fs',
    `${__dirname}/data.json`
  ]),
  output: [
    getESM({ file: './unicode-properties.esm.js' }),
    getCJS({ file: './unicode-properties.cjs.js' }),
  ]
}

export default [
  configBase
]
