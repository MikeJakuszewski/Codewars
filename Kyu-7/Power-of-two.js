// DESCRIPTION:
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

//Solution 1

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

// Solution 2

function isPowerOfTwo(number) {
  // Check if the number is positive and not zero
  if (number <= 0) {
    return false;
  }

  // Keep dividing the number by 2 until it becomes 1
  while (number > 1) {
    if (number % 2 !== 0) {
      // If the number is not divisible by 2, it's not a power of two
      return false;
    }
    number /= 2;
  }

  return true;
}
