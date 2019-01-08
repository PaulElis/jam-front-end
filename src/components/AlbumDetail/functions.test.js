const func = require('./functions');
const index = require('./index');

describe('numberFormat', () => {
  test('rounds 1,039,469 to 1M', () => {
    expect(func.numberFormat(1039469)).toBe('1M');
  });

  test('rounds 3,978,824 to 3.9M', () => {
    expect(func.numberFormat(3978824)).toBe('3.9M');
  });

  test('rounds 5,354,373 to 5.3M', () => {
    expect(func.numberFormat(5354373)).toBe('5.3M');
  });

  test('rounds 508,437 to 508K', () => {
    expect(func.numberFormat(508437)).toBe('508K');
  });
})

// test('rounds 508,437 to 508K', () => {
//   expect(index.renderArtistName(508437)).toBe('508K');
// });
