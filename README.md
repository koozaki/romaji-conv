# romaji-conv
[![](https://github.com/koozaki/romaji-conv/workflows/Node.js%20Package/badge.svg)](https://github.com/koozaki/romaji-conv/actions?query=workflow%3A%22Node.js+Package%22)
[![](https://img.shields.io/npm/v/@koozaki/romaji-conv?style=flat-square)](https://www.npmjs.com/package/@koozaki/romaji-conv)
[![](https://data.jsdelivr.com/v1/package/npm/@koozaki/romaji-conv/badge)](https://www.jsdelivr.com/package/npm/@koozaki/romaji-conv)

Convert romaji into hiragana

## About
- ローマ字をひらがなに変換します。
- 訓令式、ヘボン式どちらにも対応しています。
- Node.js, Browser, Shell 上で実行可能な軽量 JavaScript ライブラリです。

### Sample
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
