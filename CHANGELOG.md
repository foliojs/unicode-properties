# Changelog

## Unreleased

### Changed

- [BREAKING CHANGE] Publish native ESM source files instead of bundled `dist` artifacts.
- [BREAKING CHANGE] Remove default export
- Load trie data through environment-specific Node and browser implementations.
- Generate JavaScript modules for Unicode metadata and browser-safe Base64 trie data.
- Update the test suite for direct ESM imports and add a browser-condition test command.
