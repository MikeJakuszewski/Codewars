// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//Solution 1

function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((acc, v) => acc +v,0)
    let sum2 = arr2.reduce((acc, v) => acc +v,0)
  
    return sum1 + sum2
}

//solution 2

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}