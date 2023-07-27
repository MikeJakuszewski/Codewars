// DESCRIPTION:
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

//Solution 1

function hasUniqueChars(str) {
  const uniqueStr = [...new Set(str)];
  return uniqueStr.join("") === str;
}

//Solution 2

let hasUniqueChars = (str) => new Set(str).size === str.length;
