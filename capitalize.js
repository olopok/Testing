export default function capitalizeFirstLetter(string) {

  // return string.charAt(0).toUpperCase() + string.slice(1);
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  return string.replace(/^[a-z]/, firstLetter);
}
