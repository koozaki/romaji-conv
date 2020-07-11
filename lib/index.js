const reverseMap = require('./reverseMap');
const mapRomaji2Hiragana = require('./map/romaji2hiragana');
const mapHiragana2Katakana = require('./map/hiragana2katakana');
const mapKatakana2Hiragana = reverseMap(mapHiragana2Katakana);

class RomajiConv {
  /**
   * コンストラクタ
   *
   * @param string  someString - 変換対象の文字列
   */
  constructor (someString) {
    if (typeof someString !== 'string') throw new TypeError(`"${someString}" is not a string.`);

    this.someString = someString;
  
    this.hiragana = this.convert(this.someString, mapRomaji2Hiragana);
    this.hiragana = this.convert(this.hiragana, mapKatakana2Hiragana);

    this.katakana = this.convert(this.hiragana, mapHiragana2Katakana);
  }

  /**
   * 変換前の文字列を返す
   *
   * @return  string  - 変換前の文字列
   */
  string () {
    return this.someString;
  }

  /**
   * 文字列の変換
   *
   * @param   string  someString    - ローマ字 or ひらがな or カタカナ
   * @param   object  mapObject     - マッピングオブジェクト
   * @return  string  outputString  - ひらがな or カタカナ
   */
  convert (someString, mapObject) {
    const outputString = Object.keys(mapObject).reduce((processingString, pattern) => {
      const replacement = mapObject[pattern];
      const regex = new RegExp(pattern, 'gi');
      return processingString.replace(regex, replacement);
    }, someString);

    return outputString;
  }

  /**
   * 変換後のひらがなを返す
   *
   * @return  string  - 変換後のひらがな
   */
  toHiragana () {
    return this.hiragana;
  }

  /**
   * 変換後のカタカナを返す
   *
   * @return  string  - 変換後のカタカナ
   */
  toKatakana () {
    return this.katakana;
  }
}

/**
 * RomajiConv のインスタンスを返す
 *
 * @param   string    someString - 変換対象の文字列
 * @return  instance  - RomajiConv のインスタンス
 */
const romajiConv = someString => new RomajiConv(someString);

/**
 * 変換後のひらがなを返す
 *
 * @param   string  someString - 変換対象の文字列
 * @return  string  - 変換後のひらがな
 */
const toHiragana = someString => {
  const instance = new RomajiConv(someString);
  return instance.toHiragana();
};

/**
 * 変換後のカタカナを返す
 *
 * @param   string  someString - 変換対象の文字列
 * @return  string  - 変換後のカタカナ
 */
const toKatakana = someString => {
  const instance = new RomajiConv(someString);
  return instance.toKatakana();
};

module.exports = romajiConv;
module.exports.toHiragana = toHiragana;
module.exports.toKatakana = toKatakana;
