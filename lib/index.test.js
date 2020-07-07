/* global test, expect */
const romajiConv = require('../lib/index');

test('基本的な五十音の確認', () => {
  expect(romajiConv('aiueo')).toBe('あいうえお');
  expect(romajiConv('kakikukeko')).toBe('かきくけこ');
  expect(romajiConv('sashisuseso')).toBe('さしすせそ');
  expect(romajiConv('tachitsuteto')).toBe('たちつてと');
  expect(romajiConv('naninuneno')).toBe('なにぬねの');
  expect(romajiConv('hahifuheho')).toBe('はひふへほ');
  expect(romajiConv('mamimumemo')).toBe('まみむめも');
  expect(romajiConv('yayuyo')).toBe('やゆよ');
  expect(romajiConv('rarirurero')).toBe('らりるれろ');
  expect(romajiConv('wawiwuwewo')).toBe('わうぃううぇを');
  expect(romajiConv('n')).toBe('ん');
  expect(romajiConv('nn')).toBe('ん');
});

test('基本的なIO確認', () => {
  expect(romajiConv('hoge')).toBe('ほげ');
});

test('訓令式とローマ式の混合', () => {
  expect(romajiConv('anoinutyauchautocyauntyau?')).toBe('あのいぬちゃうちゃうとちゃうんちゃう？');
});

test('『ん』対応：nnやnyoの対応', () => {
  // 原因
  expect(romajiConv('genin')).toBe('げにん');
  expect(romajiConv('gennin')).toBe('げんいん');
  expect(romajiConv('genninn')).toBe('げんいん');
  // 信用
  expect(romajiConv('shinyou')).toBe('しにょう');
  expect(romajiConv('shinnyou')).toBe('しんよう');
  expect(romajiConv('shinnnyou')).toBe('しんにょう');
});

test('『ん』対応：B, M, P の前にある M は『ん』になる規則', () => {
  expect(romajiConv('namba')).toBe('なんば');
  expect(romajiConv('homma')).toBe('ほんま');
  expect(romajiConv('sanpei')).toBe('さんぺい');
});
