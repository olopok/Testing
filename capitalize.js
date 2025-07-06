export default function capitalizeFirstLetter(string) {
  //All the whitespace are removed before to upper case the first letter.
  return string.trimStart().replace(/^[a-z]/, (c) => c.toUpperCase());
}
