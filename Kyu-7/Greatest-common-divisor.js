// DESCRIPTION:
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

//Solution 1

function mygcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

//Solution 2

function mygcd(x, y) {
  const smallestNumber = Math.min(x, y);
  let commonNums = [];

  for (let i = 1; i <= smallestNumber; i++) {
    if (x % i === 0 && y % i === 0) {
      commonNums.push(i);
    }
  }
  return +commonNums.slice(-1);
}

//Solution 3

function mygcd(x, y) {
  const smallestNumber = Math.min(x, y);

  for (let i = smallestNumber; i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
}
