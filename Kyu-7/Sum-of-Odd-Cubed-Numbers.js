// DESCRIPTION:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//Solution 1

function cubeOdd(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != typeof 0) {
      return undefined;
    } else if (arr[i] % 2 != 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr.reduce((acc, val) => acc + val ** 3, 0);
}

//Solution 2

let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric
    ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0)
    : undefined;
};
