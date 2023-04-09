// DESCRIPTION:
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//Solution 1

var filterString = function(value) {
    let nums = '1234567890'
    return Number(value.split('').filter( x => nums.includes(x)).join(''))
}

//Solution 2

var filterString = value => Number(value.split('').filter( x => '1234567890'.includes(x)).join(''))