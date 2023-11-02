// DESCRIPTION:
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//Solution 1

function first(arr, n) {
  if (n === 0) return [];
  if (!n) return [arr[0]];

  return arr.slice(0, n);
}

//Solution 2

function first(arr, n) {
  return n === 0 ? [] : !n ? [arr[0]] : arr.slice(0, n);
}

//Solution 3
function first(arr, n = 1) {
  return arr.slice(0, n);
}
