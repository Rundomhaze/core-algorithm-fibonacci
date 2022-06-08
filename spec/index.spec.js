const {
  fiboIteration,
  fiboRecursion
}
  = require('../index')

describe("Should return fibonacci numbers iteration and recursion methods", function () {
  test('fiboIteration', function () {
    expect(fiboIteration(1)).toBe(1)
    expect(fiboIteration(2)).toBe(1)
    expect(fiboIteration(3)).toBe(2)
    expect(fiboIteration(4)).toBe(3)
    expect(fiboIteration(5)).toBe(5)
    expect(fiboIteration(6)).toBe(8)
    expect(fiboIteration(7)).toBe(13)
  });


  test('fiboRecursion', function () {
    expect(fiboRecursion(1)).toBe(1)
    expect(fiboRecursion(2)).toBe(1)
    expect(fiboRecursion(3)).toBe(2)
    expect(fiboRecursion(4)).toBe(3)
    expect(fiboRecursion(5)).toBe(5)
    expect(fiboRecursion(6)).toBe(8)
    expect(fiboRecursion(7)).toBe(13)
  });
});
