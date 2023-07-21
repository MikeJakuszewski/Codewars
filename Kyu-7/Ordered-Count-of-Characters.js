// DESCRIPTION:
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

//Solution 1

const orderedCount = function (text) {
  const obj = {};
  const order = [];

  for (const char of text) {
    if (!obj[char]) {
      obj[char] = 0;
      order.push(char);
    }
    obj[char]++;
  }

  const result = order.map((char) => [char, obj[char]]);
  return result;
};
