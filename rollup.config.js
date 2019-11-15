import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json';
import { dependencies } from './package.json'

const cjs = {
  format: 'cjs',
  sourcemap: true,
  interop: false
}

const esm = {
  format: 'es',
  sourcemap: true
}

const getCJS = override => Object.assign({}, cjs, override)
const getESM = override => Object.assign({}, esm, override)

const configBase = {
  plugins: [
    json({compact: true}),
    babel({
      presets: [
        [
          '@babel/preset-env', 
          {
            modules: false,
            targets: {
              node: '8.11',
              browsers: [
                'Firefox 57',
                'Chrome 60',
                'iOS 10',
                'Safari 10'
              ]
            }
          }
        ]
      ]
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
    'fs'
  ])
});


const browserConfig = Object.assign({}, configBase, {
  input: './browser.js',
  output: [
    getESM({ file: './unicode-properties.browser.es.js' }),
    getCJS({ file: './unicode-properties.browser.cjs.js' }),
  ]
});


export default [
  nodeConfig,
  browserConfig
]
