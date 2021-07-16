/**
 * @jest-environment jsdom
 */
/* global test, expect */
require('./entry');

test('window に romajiConv 関数がある', () => {
  expect(typeof window['romajiConv']).toBe('function');
  expect(typeof window.romajiConv).toBe('function');
});

test('window で動作する', () => {
  expect(window.romajiConv('hoge').toHiragana()).toBe('ほげ');
});
