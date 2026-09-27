import { readFileSync } from 'node:fs';

export function getBinaryTrie() {
  return readFileSync(new URL('./data.trie', import.meta.url));  
}