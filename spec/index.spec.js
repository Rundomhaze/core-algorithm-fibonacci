const {
  fibIt,
  fibRec
}
= require('../index')

test('fibIt', function () {
  expect(fibIt(1)).toBe(1)
  expect(fibIt(2)).toBe(1)
  expect(fibIt(3)).toBe(2)
  expect(fibIt(4)).toBe(3)
  expect(fibIt(5)).toBe(5)
  expect(fibIt(6)).toBe(8)
  expect(fibIt(7)).toBe(13)
});


test('fibRec', function () {
  expect(fibRec(1)).toBe(1)
  expect(fibRec(2)).toBe(1)
  expect(fibRec(3)).toBe(2)
  expect(fibRec(4)).toBe(3)
  expect(fibRec(5)).toBe(5)
  expect(fibRec(6)).toBe(8)
  expect(fibRec(7)).toBe(13)
});

