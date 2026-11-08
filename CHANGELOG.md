# Changelog

## v2.0.2

- Fix numeric values and defaults for unassigned code points (#29)

## v2.0.1

- Add data.trie to "files" entry

## v2.0.0

- [BREAKING CHANGE] Publish native ESM source files instead of bundled `dist` artifacts.
- [BREAKING CHANGE] Remove default export
- Expose the generated metadata and binary trie as `unicode-properties/data.js` and `unicode-properties/data.trie` package exports.
- Load trie data through environment-specific Node and browser implementations.
- Generate JavaScript modules for Unicode metadata and browser-safe Base64 trie data.
- Update the test suite for direct ESM imports and add a browser-condition test command.
- [BREAKING CHANGE] Update unicode-trie dependency to version 3 (compression schema changed)
