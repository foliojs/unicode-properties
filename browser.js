import UnicodeTrie from 'unicode-trie';
import data from './data.json';
import trieData from './trie.json';
import buildUnicodeProperties from './index';

const trie = new UnicodeTrie(new Uint8Array(trieData.data));
const unicodeProperties = buildUnicodeProperties(data, trie);

export default unicodeProperties;
