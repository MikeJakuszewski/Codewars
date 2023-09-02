// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.

// Solution 1

function anagramDifference(w1, w2) {
  // Convert both words to lowercase
  w1 = w1.toLowerCase();
  w2 = w2.toLowerCase();

  // Create frequency maps for both words
  const frequencyMap1 = {};
  const frequencyMap2 = {};

  // Populate frequency map for w1
  for (const letter of w1) {
    frequencyMap1[letter] = (frequencyMap1[letter] || 0) + 1;
  }

  // Populate frequency map for w2
  for (const letter of w2) {
    frequencyMap2[letter] = (frequencyMap2[letter] || 0) + 1;
  }

  // Calculate the difference in frequencies
  let lettersToRemove = 0;

  for (const letter in frequencyMap1) {
    if (!frequencyMap2[letter]) {
      // Letter in w1 does not exist in w2
      lettersToRemove += frequencyMap1[letter];
    } else {
      // Calculate the absolute difference in frequencies
      lettersToRemove += Math.abs(
        frequencyMap1[letter] - frequencyMap2[letter]
      );
    }
  }

  for (const letter in frequencyMap2) {
    if (!frequencyMap1[letter]) {
      // Letter in w2 does not exist in w1
      lettersToRemove += frequencyMap2[letter];
    }
  }

  return lettersToRemove;
}
