# romaji-conv
[![](https://github.com/koozaki/romaji-conv/workflows/Node.js%20Package/badge.svg)](https://github.com/koozaki/romaji-conv/actions?query=workflow%3A%22Node.js+Package%22)
[![](https://img.shields.io/github/v/release/koozaki/romaji-conv?style=flat-square)](https://github.com/koozaki/romaji-conv/releases)
[![](https://img.shields.io/npm/v/@koozaki/romaji-conv?style=flat-square)](https://www.npmjs.com/package/@koozaki/romaji-conv)
[![](https://data.jsdelivr.com/v1/package/npm/@koozaki/romaji-conv/badge)](https://www.jsdelivr.com/package/npm/@koozaki/romaji-conv)
[![](https://img.shields.io/npm/l/@koozaki/romaji-conv?style=flat-square)](https://github.com/koozaki/romaji-conv/blob/master/LICENSE)

Convert romaji into hiragana

## About
- ローマ字をひらがなに変換します。
- 訓令式、ヘボン式など幅広い記法に対応しています。
- シンプルな[完全ディクショナリ型設計](https://github.com/koozaki/romaji-conv/blob/master/lib/map.js)のため誰でも簡単に[改善](https://github.com/koozaki/romaji-conv/pulls)ができます。
- Node.js, Browser, Shell 上で実行可能な軽量 JavaScript ライブラリです。

### Usage
#### Node.js
```node
const romajiConv = require('romaji-conv');
console.log(romajiConv('anoinutyauchautocyauntyau'));
// あのいぬちゃうちゃうとちゃうんちゃう
```

#### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/@koozaki/romaji-conv/dist/romaji-conv.js"></script>
<script>
console.log(window.romajiConv('anoinutyauchautocyauntyau'));
</script>
// あのいぬちゃうちゃうとちゃうんちゃう
```

#### CLI (Shell)
```sh
$ ./bin/romaji-conv.js anoinutyauchautocyauntyau
あのいぬちゃうちゃうとちゃうんちゃう
```
