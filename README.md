# romaji-conv
<a href="https://www.npmjs.com/package/@koozaki/romaji-conv"><img src="https://img.shields.io/npm/v/@koozaki/romaji-conv?style=flat-square"></a>

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
<script src="romaji-conv.js"></script>
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
