const func = require('./functions');

test('numberFormat', () => {
  expect(func.numberFormat(1039469)).toBe('1M');
});

test('numberFormat', () => {
  expect(func.numberFormat(3978824)).toBe('3.9M');
});

test('numberFormat', () => {
  expect(func.numberFormat(5354373)).toBe('5.3M');
});
