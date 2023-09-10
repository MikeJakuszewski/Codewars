// DESCRIPTION:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

//Solution 1

function reverseNumber(n) {
  if (n.toString().includes("-")) {
    let word = n.toString().split("").reverse();
    word.pop();
    word.unshift("-");
    return +word.join("");
  }
  return +n.toString().split("").reverse().join("");
}

//Solution 2

function reverseNumber(n) {
  let isNegative = n < 0;
  let reverseAsString = Math.abs(n).toString().split("").reverse().join("");
  let result = Number(reverseAsString);

  return isNegative ? -result : result;
}
