// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

//Solution 1
function halvingSum(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n);
    n = Math.floor(n / 2);
  }
  return arr.reduce((acc, val) => acc + val, 0);
}

//Solution 2

function halvingSum(n) {
  if (n === 1) return n;
  return n + halvingSum(Math.floor(n / 2));
}
