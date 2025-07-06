import reverseString from "./reverse-string";

test("The string is reversed", () => {
  expect(reverseString(" Hello world!")).toBe("!dlrow olleH ");
});
