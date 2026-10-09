# Changelog

## Unreleased

### Changed

- [BREAKING CHANGE] Publish native ESM source files instead of bundled `dist` artifacts.
- [BREAKING CHANGE] Remove default export
- Expose the generated metadata and binary trie as `unicode-properties/data.js` and `unicode-properties/data.trie` package exports.
- Load trie data through environment-specific Node and browser implementations.
- Generate JavaScript modules for Unicode metadata and browser-safe Base64 trie data.
- Update the test suite for direct ESM imports and add a browser-condition test command.
- [BREAKING CHANGE] Update unicode-trie dependency to version 3 (compression schema changed)
