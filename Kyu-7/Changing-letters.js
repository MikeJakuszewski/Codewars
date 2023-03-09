// DESCRIPTION:
// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

//Solution 1

function swap (string) {
    let vowels = 'aeiou'
    
    return string.split('').map(x=> vowels.includes(x)? x.toUpperCase(): x).join('')
  }