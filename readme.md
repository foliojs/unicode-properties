# unicode-properties

Provides fast access to unicode character properties. Uses [unicode-trie](https://github.com/foliojs/unicode-trie) to compress the 
properties for all code points into just 9.5KB. Currently, unicode-properties supports Unicode version 12.

## Usage

    npm install unicode-properties

```javascript
import { getCategory, getNumericValue } from 'unicode-properties';

getCategory('2'.charCodeAt()) //=> 'Nd'
getNumericValue('2'.charCodeAt()) //=> 2

// alternatively you can import the entire module as an object
import * as unicode from 'unicode-properties';
```

## Data exports

The generated Unicode data is also available through package subpath exports:

```javascript
import data from 'unicode-properties/data.js';

data.categories;
data.combiningClasses;
data.scripts;
data.eaw;
```

The `unicode-properties/data.trie` export provides the raw binary trie used by the Node implementation. It is intended for tools and integrations that need the underlying trie data rather than the character-property API.

## API

### getCategory(codePoint)

Returns the unicode [general category](http://www.fileformat.info/info/unicode/category/index.htm) for the given code point.

### getScript(codePoint)

Returns the [script](http://unicode.org/standard/supported.html) for the given code point.

### getCombiningClass(codePoint)

Returns the [canonical combining class](http://unicode.org/glossary/#combining_class) for the given code point.

### getEastAsianWidth(codePoint)

Returns the [East Asian width](http://www.unicode.org/reports/tr11/tr11-28.html) for the given code point.

### getNumericValue(codePoint)

Returns the numeric value for the given code point, or null if there is no numeric value for that code point.

### isAlphabetic(codePoint)

Returns whether the code point is an alphabetic character.

### isDigit(codePoint)

Returns whether the code point is a digit.

### isPunctuation(codePoint)

Returns whether the code point is a punctuation character.

### isLowerCase(codePoint)

Returns whether the code point is lower case.

### isUpperCase(codePoint)

Returns whether the code point is upper case.

### isTitleCase(codePoint)

Returns whether the code point is title case.

### isWhiteSpace(codePoint)

Returns whether the code point is whitespace: specifically, whether the category is one of Zs, Zl, or Zp.

### isBaseForm(codePoint)

Returns whether the code point is a base form. A code point of base form does not graphically combine with preceding
characters.

### isMark(codePoint)

Returns whether the code point is a mark character (e.g. accent).

## CommonJS Compatibility

The package is published as an ECMAScript module (ESM). To [load it using `require()`](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require), Node.js 20.17.0 or later is required.

```js
// Example of loading the package using require() in Node.js 20.17.0 or higher
const { getCategory, getNumericValue } = require('unicode-properties');
```

## License

MIT
