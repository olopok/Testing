export function analyzeArray(arr) {
  const getMax = (a, b) => Math.max(a, b);
  const getMin = (a, b) => Math.min(a, b);
  const getSum = (a, b) => a + b;
  const object = {
    average: arr.reduce(getSum, 0) / arr.length,
    min: arr.reduce(getMin, arr[0]),
    max: arr.reduce(getMax, arr[0]),
    length: arr.length,
  };
  return object;
}
