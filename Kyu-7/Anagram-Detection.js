// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//Solution 1

var isAnagram = function(test, original) {
  
    let wordOne = test.toLowerCase().split('').sort((a,b) => a> b? -1:1).join('')
    let wordTwo = original.toLowerCase().split('').sort((a,b) => a> b? -1:1).join('')
    
    return wordOne == wordTwo
};
  
//Solution 2

var isAnagram = function(test, original) {
    let t = test.toLowerCase().split('').sort().join('');
    let o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
};