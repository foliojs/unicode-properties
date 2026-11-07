import assert from 'assert';
import * as esm from '../index.js';

describe('unicode-properties', () => {
  describe('esm', () => {
    test(esm);
  });
});

function test(unicode) {
  it('getCategory', () => {
    assert.equal(unicode.getCategory('2'.charCodeAt()), 'Nd');
    assert.equal(unicode.getCategory('x'.charCodeAt()), 'Ll');
    assert.equal(unicode.getCategory(0x0378), 'Cn');
    assert.equal(unicode.getCategory(0xFFFF), 'Cn');
  });

  it('getCombiningClass', () => {
    assert.equal(unicode.getCombiningClass('x'.charCodeAt()), 'Not_Reordered');
    assert.equal(unicode.getCombiningClass('́'.charCodeAt()), 'Above');
    assert.equal(unicode.getCombiningClass('ٕ'.charCodeAt()), 'Below');
    assert.equal(unicode.getCombiningClass('ٔ'.charCodeAt()), 'Above');
  });

  it('getScript', () => {
    assert.equal(unicode.getScript('x'.charCodeAt()), 'Latin');
    assert.equal(unicode.getScript('غ'.charCodeAt()), 'Arabic');
    assert.equal(unicode.getScript(0x0378), 'Unknown');
  });

  it('getEastAsianWidth', () => {
    assert.equal(unicode.getEastAsianWidth('x'.charCodeAt()), 'Na');
    assert.equal(unicode.getEastAsianWidth('杜'.charCodeAt()), 'W');
    assert.equal(unicode.getEastAsianWidth('Æ'.charCodeAt()), 'A');
  });

  it('getNumericValue', () => {
    assert.equal(unicode.getNumericValue('2'.charCodeAt()), 2);
    assert.equal(unicode.getNumericValue('x'.charCodeAt()), null);
    assert.equal(unicode.getNumericValue(0x2169), 10);
    assert.equal(unicode.getNumericValue(0x2473), 20);
    assert.equal(unicode.getNumericValue(0x1376), 50);
    assert.equal(unicode.getNumericValue(0x137A), 90);
    assert.equal(unicode.getNumericValue(0x216D), 100);
    assert.equal(unicode.getNumericValue(0x12432), 216000);
    assert.equal(unicode.getNumericValue(0x00BD), 1 / 2);
    assert.equal(unicode.getNumericValue(0x0D58), 1 / 160);
    assert.equal(unicode.getNumericValue(0x0D5A), 3 / 80);
    assert.equal(unicode.getNumericValue(0x11FC0), 1 / 320);
    assert.equal(unicode.getNumericValue(0x11FC7), 3 / 64);
  });

  it('isAlphabetic', () => {
    assert(unicode.isAlphabetic('x'.charCodeAt()));
    assert(!unicode.isAlphabetic('2'.charCodeAt()));
  });

  it('isDigit', () => {
    assert(!unicode.isDigit('x'.charCodeAt()));
    assert(unicode.isDigit('2'.charCodeAt()));
  });

  it('isPunctuation', () => {
    assert(!unicode.isPunctuation('x'.charCodeAt()));
    assert(unicode.isPunctuation('.'.charCodeAt()));
  });

  it('isLowerCase', () => {
    assert(!unicode.isLowerCase('X'.charCodeAt()));
    assert(!unicode.isLowerCase('2'.charCodeAt()));
    assert(unicode.isLowerCase('x'.charCodeAt()));
  });

  it('isUpperCase', () => {
    assert(unicode.isUpperCase('X'.charCodeAt()));
    assert(!unicode.isUpperCase('2'.charCodeAt()));
    assert(!unicode.isUpperCase('x'.charCodeAt()));
  });

  it('isTitleCase', () => {
    assert(unicode.isTitleCase('ǲ'.charCodeAt()));
    assert(!unicode.isTitleCase('2'.charCodeAt()));
    assert(!unicode.isTitleCase('x'.charCodeAt()));
  });

  it('isWhiteSpace', () => {
    assert(unicode.isWhiteSpace(' '.charCodeAt()));
    assert(!unicode.isWhiteSpace('2'.charCodeAt()));
    assert(!unicode.isWhiteSpace('x'.charCodeAt()));
  });

  it('isBaseForm', () => {
    assert(unicode.isBaseForm('2'.charCodeAt()));
    assert(unicode.isBaseForm('x'.charCodeAt()));
    assert(!unicode.isBaseForm('́'.charCodeAt()));
  });

  it('isMark', () => {
    assert(!unicode.isMark('2'.charCodeAt()));
    assert(!unicode.isMark('x'.charCodeAt()));
    assert(unicode.isMark('́'.charCodeAt()));
  });
}
