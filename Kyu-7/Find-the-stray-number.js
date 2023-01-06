// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//Solution 1

const stray = numbers => numbers.sort((a,b) => a-b).filter( x => x === numbers[0]).length === 1? numbers[0] : numbers[numbers.length-1]

//Soilution 2

const stray = arr => arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))[0]