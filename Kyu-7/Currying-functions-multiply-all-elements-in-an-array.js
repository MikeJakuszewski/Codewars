// DESCRIPTION:
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// Here's a nice Youtube video about currying, which might help you if this is new to you.

//Solution 1

function multiplyAll(val) {
  return function secondFunction(otherNum) {
    return val.map((num) => num * otherNum);
  };
}
//Solution 2

const multiplyAll = (arr) => (multiplier) => arr.map((num) => num * multiplier);

//Solution 3
function multiplyAll(arr) {
  return function (multiplier) {
    return arr.map(function (num) {
      return num * multiplier;
    });
  };
}
