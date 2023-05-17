// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//Solution 1

function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}` 
  }