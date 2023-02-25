// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//Solution 1

var capitals = function (word) {
    let nums = []
    word.split('').filter((x,i) =>{
      if(x == x.toUpperCase()) nums.push(i)
    })
    return nums
};

//Solution 1- removed lines