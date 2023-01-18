// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//Solution 1

function spinWords(string){
    //will need to split each word
    //then check the length of each word
    //use the map method, if a word greater or equal to 5 letters we will reverse
    //join together
    
    return string.split(' ').map(x => x.length>=5? x.split('').reverse().join(''): x).join(' ')
}

//Solution 2

const spinWords = string => string.split(' ').map(x => x.length>=5? x.split('').reverse().join(''): x).join(' ')
