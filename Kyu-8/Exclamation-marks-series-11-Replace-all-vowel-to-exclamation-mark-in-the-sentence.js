// DESCRIPTION:
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//Solution 1

function replace(s){
    let vowels = 'aeiouAEIOU'.split('')
    return s.split('').map(x => vowels.includes(x)? '!' : x).join('')
}