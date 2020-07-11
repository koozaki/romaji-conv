/* global test, expect */
const reverseMap = require('./reverseMap');

test('reverseMap は function 型', () => {
  expect(typeof reverseMap).toBe('function');
});

test('reverseMap はオブジェクトの key と value を入れ替える', () => {
  expect(reverseMap({
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
    'key4': 'value4',
    'key5': 'value5'
  })).toEqual({
    'value1': 'key1',
    'value2': 'key2',
    'value3': 'key3',
    'value4': 'key4',
    'value5': 'key5'
  });
});
