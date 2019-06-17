import fs from 'fs';
import UnicodeTrie from 'unicode-trie';
import data from './data.json';
import buildUnicodeProperties from './index';

const trie = new UnicodeTrie(fs.readFileSync(__dirname + '/data.trie'));
const unicodeProperties = buildUnicodeProperties(data, trie);

export default unicodeProperties;
