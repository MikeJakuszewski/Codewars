// DESCRIPTION:
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

//Solution 1

function newWord(array) {
  let newArr = [];
  let word = "";
  for (let i = 0; i < array.length; i++) {
    word += array[i];
    newArr.push(word);
  }
  return newArr;
}

//Solution 2

function spacey(array) {
  let string = "";
  return array.map((e) => (string += e));
}
