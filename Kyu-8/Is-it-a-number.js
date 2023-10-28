// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

//Solution 1

function isDigit(s) {
  // Regular expression to match valid integers or floating-point numbers
  const regex = /^[\s]*[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[\s]*$/;
  return regex.test(s);
}

//Solution 2

function isDigit(s) {
  return parseFloat(s) === Number(s);
}
