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
  plugins: [
    babel({
      babelrc: false,
      presets: [["es2015", { modules: false }]],
      plugins: [ 'external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
}

const nodeConfig = Object.assign({}, configBase, {
  input: './node.js',
  output: [
    getESM({ file: './unicode-properties.es.js' }),
    getCJS({ file: './unicode-properties.cjs.js' }),
  ],
  external: Object.keys(dependencies).concat([
    'fs',
    `${__dirname}/data.json`
  ])
});


const browserConfig = Object.assign({}, configBase, {
  input: './browser.js',
  output: [
    getESM({ file: './unicode-properties.browser.es.js' }),
    getCJS({ file: './unicode-properties.browser.cjs.js' }),
  ],
  external: Object.keys(dependencies).concat([
    `${__dirname}/data.json`,
    `${__dirname}/trie.json`
  ])
});


export default [
  nodeConfig,
  browserConfig
]
