// DESCRIPTION:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

//Solution 1
function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, val) => +acc + +val, 0);
}

//Solution 2

function largestPairSum(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0] + numbers[1];
}

//Solution 3

function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}
