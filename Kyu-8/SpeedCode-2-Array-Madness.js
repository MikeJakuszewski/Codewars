// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

//Solution 1

function arrayMadness(a, b) {
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < a.length; i++) {
    countA += a[i] ** 2;
  }
  for (let j = 0; j < b.length; j++) {
    countB += b[j] ** 3;
  }
  return countA > countB;
}
