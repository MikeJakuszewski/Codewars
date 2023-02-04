// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//Solution 1
function findUniq(arr) {
    let sortedArr = arr.sort()
    return sortedArr[0] != sortedArr[1] ? sortedArr[0] : sortedArr[sortedArr.length-1]
}

//Solution 2 - refactored solution of 1 for 1 line

const findUniq = arr => arr.sort()[0] != arr.sort()[1] ? arr.sort()[0] : arr.sort()[arr.length-1]

//Solution 3 - using index's
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}