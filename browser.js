import UnicodeTrie from 'unicode-trie';
import base64 from 'base64-js';
import data from './data.json';
import trieData from './trie.json';
import buildUnicodeProperties from './index';

const trie = new UnicodeTrie(base64.toByteArray(trieData.data));
const unicodeProperties = buildUnicodeProperties(data, trie);

export default unicodeProperties;
