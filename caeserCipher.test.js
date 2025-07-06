import { cipherText } from "./caeserCipher";

test("Text ciphered", () => {
  expect(cipherText("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(cipherText("Hello", 3)).toBe("Khoor");
  expect(cipherText("hello", 3)).toBe("khoor");
  expect(cipherText("xyz", 3)).toBe("abc");
});
