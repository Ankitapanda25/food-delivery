# next-json
> Better json parse/stringify for JSON.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-json
```

## usage
```js
import '@jswork/next-json';

const obj = {
  gihtub: 'afeiship',
  homepage:'https://js.work'
};

nx.stringify(obj);

// '{"gihtub":"afeiship","homepage":"https://js.work"}'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-json/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-json
[version-url]: https://npmjs.org/package/@jswork/next-json

[license-image]: https://img.shields.io/npm/l/@jswork/next-json
[license-url]: https://github.com/afeiship/next-json/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-json
[size-url]: https://github.com/afeiship/next-json/blob/master/dist/next-json.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-json
[download-url]: https://www.npmjs.com/package/@jswork/next-json
