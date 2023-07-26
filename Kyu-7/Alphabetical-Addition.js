// DESCRIPTION:
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

//Solution 1

function addLetters(...letters) {
  if (!letters.length) return "z";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    count += Number(alphabet.indexOf(letters[i])) + 1;
  }
  return alphabet[(count - 1) % 26];
}

//Solution 2

function addLetters(...letters) {
  if (!letters.length) return "z";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    count += Number(alphabet.indexOf(letters[i])) + 1;
  }
  const resultIndex = (count - 1) % 26;
  return alphabet[resultIndex];
}
