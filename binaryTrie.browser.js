import base64Trie from './data.base64.trie.js';

function fromBase64(b64) {
  const binary = atob(b64);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    out[i] = binary.charCodeAt(i);
  }
  return out;
};

export function getBinaryTrie() {
  return fromBase64(base64Trie);
};