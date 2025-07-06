import calculator from "./calculator";

test("The operations are done", () => {
  expect(calculator.add(2, 1)).toBe(3);
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(3, 2)).toBe(1);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.multiply(3, 2)).toBe(6);
});
