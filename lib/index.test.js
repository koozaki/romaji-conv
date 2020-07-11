/* global describe, test, beforeEach, expect */
const romajiConv = require('./index');
const { toHiragana, toKatakana } = romajiConv;

test('romajiConv は function 型', () => {
  expect(typeof romajiConv).toBe('function');
});

test('romajiConv は string 型の引数のみ受け付ける', () => {
  expect(() => romajiConv()).toThrow(TypeError);
  expect(() => romajiConv(1)).toThrow(TypeError);
  expect(() => romajiConv({})).toThrow(TypeError);
});

test('romajiConv インスタンスは string メソッドを持つ', () => {
  expect(typeof romajiConv('hoge').string).toBe('function');
});

test('romajiConv インスタンスの string メソッドは romajiConv に渡した引数を返す', () => {
  const input = 'hogehoge';
  expect(romajiConv(input).string()).toBe(input);
});

describe('基本的な五十音の確認', () => {
  let romaji, hiragana, katakana;
  let romajiInstance, hiraganaInstance, katakanaInstance;

  beforeEach(() => {
    romaji = '' +
      'aiueokakikukekosashisusesotachitsutetonaninuneno' +
      'hahifuhehomamimumemoyayuyorarirurerowawiwuwewonnn';

    hiragana = '' +
      'あいうえおかきくけこさしすせそたちつてとなにぬねの' +
      'はひふへほまみむめもやゆよらりるれろわうぃううぇをんん';

    katakana = '' +
      'アイウエオカキクケコサシスセソタチツテトナニヌネノ' +
      'ハヒフヘホマミムメモヤユヨラリルレロワウィウウェヲンン'

    romajiInstance = romajiConv(romaji);
    hiraganaInstance = romajiConv(hiragana);
    katakanaInstance = romajiConv(katakana);
  });

  test('ローマ字→ひらがな', () => {
    expect(romajiInstance.toHiragana()).toBe(hiragana);
  });

  test('ローマ字→ひらがな（関数版）', () => {
    expect(toHiragana(romaji)).toBe(hiragana);
  });

  test('ローマ字→カタカナ', () => {
    expect(romajiInstance.toKatakana()).toBe(katakana);
  });

  test('ローマ字→カタカナ（関数版）', () => {
    expect(toKatakana(romaji)).toBe(katakana);
  });

  test('ひらがな→ひらがな', () => {
    expect(hiraganaInstance.toHiragana()).toBe(hiragana);
  });

  test('ひらがな→ひらがな（関数版）', () => {
    expect(toHiragana(hiragana)).toBe(hiragana);
  });

  test('ひらがな→カタカナ', () => {
    expect(hiraganaInstance.toKatakana()).toBe(katakana);
  });

  test('ひらがな→カタカナ（関数版）', () => {
    expect(toKatakana(hiragana)).toBe(katakana);
  });

  test('カタカナ→ひらがな', () => {
    expect(katakanaInstance.toHiragana()).toBe(hiragana);
  });

  test('カタカナ→ひらがな（関数版）', () => {
    expect(toHiragana(katakana)).toBe(hiragana);
  });

  test('カタカナ→カタカナ', () => {
    expect(katakanaInstance.toKatakana()).toBe(katakana);
  });

  test('カタカナ→カタカナ（関数版）', () => {
    expect(toKatakana(katakana)).toBe(katakana);
  });
});

test('toHiragana: 訓令式とローマ式の混合', () => {
  expect(
    romajiConv('anoinutyauchautocyauntyau?').toHiragana()
  ).toBe('あのいぬちゃうちゃうとちゃうんちゃう？');
});

test('toHiragana: 『ん』対応：nnやnyoの対応', () => {
  // 原因
  expect(romajiConv('genin').toHiragana()).toBe('げにん');
  expect(romajiConv('gennin').toHiragana()).toBe('げんいん');
  expect(romajiConv('genninn').toHiragana()).toBe('げんいん');
  // 信用
  expect(romajiConv('shinyou').toHiragana()).toBe('しにょう');
  expect(romajiConv('shinnyou').toHiragana()).toBe('しんよう');
  expect(romajiConv('shinnnyou').toHiragana()).toBe('しんにょう');
});

test('toHiragana: 『ん』対応：B, M, P の前にある M は『ん』になる規則', () => {
  expect(romajiConv('namba').toHiragana()).toBe('なんば');
  expect(romajiConv('homma').toHiragana()).toBe('ほんま');
  expect(romajiConv('sanpei').toHiragana()).toBe('さんぺい');
});
