function shiftedAlphabet(key) {
  const linearAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const shiftedLetters = linearAlphabet.splice(0, key);
  return linearAlphabet.concat(shiftedLetters);
}

export function cipherText(text, key) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const newAlphabet = shiftedAlphabet(3);
  const arr = Array.from(text);
  let cipherLetters = [];
  for (let i = 0; i < arr.length; i++) {
    const newLetter = alphabet.indexOf(arr[i].toLowerCase());
    if (/[A-Z]/.test(arr[i])) {
      cipherLetters[i] = newAlphabet[newLetter].toUpperCase();
    } else cipherLetters[i] = newAlphabet[newLetter];
      if (/[^a-zA-Z]/g.test(arr[i])) {
          cipherLetters[i] = arr[i];
      }
  }
  return cipherLetters.join("");
}
