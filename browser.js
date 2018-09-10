import UnicodeTrie from 'unicode-trie';
import data from './data.json';
import trieData from './trie.json';
import buildUnicodeProperties from './index';

const trie = new UnicodeTrie(Buffer.from(trieData.data, 'base64'));
const unicodeProperties = buildUnicodeProperties(data, trie);

export default unicodeProperties;
