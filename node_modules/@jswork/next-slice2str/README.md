# next-slice2str
> Slice string to two part.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-slice2str
```

## apis
| argument | type   | default |
|----------|--------|---------|
| str      | String | -       |
| index    | Number | -       |
| step     | Number | 0       |

## usage
```js
import '@jswork/next-slice2str';

const str = 'test@123.com';
const idx = str.indexOf('@');
const arr1 = nx.slice2str(str, idx);
const arr2 = nx.slice2str(str, idx, 1);

// [ 'test', '123.com' ]
// [ 'test', '123.com' ]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-slice2str/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-slice2str
[version-url]: https://npmjs.org/package/@jswork/next-slice2str

[license-image]: https://img.shields.io/npm/l/@jswork/next-slice2str
[license-url]: https://github.com/afeiship/next-slice2str/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-slice2str
[size-url]: https://github.com/afeiship/next-slice2str/blob/master/dist/next-slice2str.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-slice2str
[download-url]: https://www.npmjs.com/package/@jswork/next-slice2str
