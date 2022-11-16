// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//Solution 1

function createPhoneNumber(n){

    let sectionOne = n.slice(0,3).join('')
    let sectionTwo = n.slice(3,6).join('')
    let sectionThree = n.slice(6,n.length).join('')
    return `(${sectionOne}) ${sectionTwo}-${sectionThree}`
}

//solution 2

function createPhoneNumber(numbers){
    const format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}