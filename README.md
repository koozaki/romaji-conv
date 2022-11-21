# romaji-conv

[![](https://github.com/koozaki/romaji-conv/workflows/Node.js%20Package/badge.svg)](https://github.com/koozaki/romaji-conv/actions?query=workflow%3A%22Node.js+Package%22)
[![](https://img.shields.io/github/v/release/koozaki/romaji-conv?style=flat-square)](https://github.com/koozaki/romaji-conv/releases)
[![](https://img.shields.io/npm/v/@koozaki/romaji-conv?style=flat-square)](https://www.npmjs.com/package/@koozaki/romaji-conv)
[![](https://data.jsdelivr.com/v1/package/npm/@koozaki/romaji-conv/badge)](https://www.jsdelivr.com/package/npm/@koozaki/romaji-conv)
[![](https://img.shields.io/npm/l/@koozaki/romaji-conv?style=flat-square)](https://github.com/koozaki/romaji-conv/blob/master/LICENSE)

Convert romaji into kana

### About

- ローマ字・ひらがな・カタカナをひらがな・カタカナに変換します。
- 訓令式、ヘボン式など幅広い記法に対応しています。
- シンプルな[完全ディクショナリ型設計](https://github.com/koozaki/romaji-conv/blob/master/lib/map/)のため誰でも簡単に[改善](https://github.com/koozaki/romaji-conv/pulls)ができます。
- Browser, Node.js, CLI で動作する軽量 JavaScript ライブラリです。
- 不具合報告は[こちら](https://github.com/koozaki/romaji-conv/issues/new?assignees=koozaki&labels=bug&template=bug_report.md)からお願いします。

### Usage

#### Browser

##### Load the romaji-conv.js (jsDelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/@koozaki/romaji-conv@2.0.20/dist/romaji-conv.js"></script>
```

##### 1. Method pattern

```html
<script>
  console.log(romajiConv('hogehoge').toHiragana()); // ほげほげ

  // ローマ字 → ひらがな・カタカナ
  var romaji = romajiConv('anoinutyauchautocyauntyau');
  console.log(romaji.toHiragana()); // あのいぬちゃうちゃうとちゃうんちゃう
  console.log(romaji.toKatakana()); // アノイヌチャウチャウトチャウンチャウ

  // ひらがな → カタカナ
  var hiragana = romajiConv('あのいぬちゃうちゃうとちゃうんちゃう');
  console.log(hiragana.toKatakana()); // アノイヌチャウチャウトチャウンチャウ

  // カタカナ → ひらがな
  var katakana = romajiConv('アノイヌチャウチャウトチャウンチャウ');
  console.log(katakana.toHiragana()); // あのいぬちゃうちゃうとちゃうんちゃう
</script>
```

##### 2. Function pattern

```html
<script>
  var toHiragana = romajiConv.toHiragana;
  var toKatakana = romajiConv.toKatakana;

  // ローマ字 → ひらがな・カタカナ
  console.log(toHiragana('hogehoge')); // ほげほげ
  console.log(toKatakana('hogehoge')); // ホゲホゲ

  // ひらがな → カタカナ
  console.log(toKatakana('ほげほげ')); // ホゲホゲ

  // カタカナ → ひらがな
  console.log(toHiragana('ホゲホゲ')); // ほげほげ
</script>
```

#### Node.js

##### Install package

```sh
npm install @koozaki/romaji-conv
```

or

```sh
yarn add @koozaki/romaji-conv
```

##### 1. Method pattern

```javascript
const romajiConv = require('@koozaki/romaji-conv');

console.log(romajiConv('hogehoge').toHiragana()); // ほげほげ

// ローマ字 → ひらがな・カタカナ
const romaji = romajiConv('anoinutyauchautocyauntyau');
console.log(romaji.toHiragana()); // あのいぬちゃうちゃうとちゃうんちゃう
console.log(romaji.toKatakana()); // アノイヌチャウチャウトチャウンチャウ

// ひらがな → カタカナ
const hiragana = romajiConv('あのいぬちゃうちゃうとちゃうんちゃう');
console.log(hiragana.toKatakana()); // アノイヌチャウチャウトチャウンチャウ

// カタカナ → ひらがな
const katakana = romajiConv('アノイヌチャウチャウトチャウンチャウ');
console.log(katakana.toHiragana()); // あのいぬちゃうちゃうとちゃうんちゃう
```

##### 2. Function pattern

```javascript
const { toHiragana, toKatakana } = require('@koozaki/romaji-conv');

// ローマ字 → ひらがな・カタカナ
console.log(toHiragana('hogehoge')); // ほげほげ
console.log(toKatakana('hogehoge')); // ホゲホゲ

// ひらがな → カタカナ
console.log(toKatakana('ほげほげ')); // ホゲホゲ

// カタカナ → ひらがな
console.log(toHiragana('ホゲホゲ')); // ほげほげ
```

#### CLI

```sh
# ローマ字 → ひらがな・カタカナ
$(npm bin)/romaji-conv anoinutyauchautocyauntyau # あのいぬちゃうちゃうとちゃうんちゃう
$(npm bin)/romaji-conv anoinutyauchautocyauntyau --katakana # アノイヌチャウチャウトチャウンチャウ

# ひらがな → カタカナ
$(npm bin)/romaji-conv あのいぬちゃうちゃうとちゃうんちゃう --katakana # アノイヌチャウチャウトチャウンチャウ

# カタカナ → ひらがな
$(npm bin)/romaji-conv アノイヌチャウチャウトチャウンチャウ # あのいぬちゃうちゃうとちゃうんちゃう
```
