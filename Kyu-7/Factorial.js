// DESCRIPTION:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

//Solution 1

function factorial(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    count *= i;
  }
  return count;
}
