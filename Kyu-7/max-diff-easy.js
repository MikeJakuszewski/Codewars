// DESCRIPTION:
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!

//Solution 1

function maxDiff(list) {
    if (list.length <=1) return 0
    let sortedArr = list.sort((a,b) => a-b)
    let max = sortedArr.slice(-1)
    let min = sortedArr[0]
    return +max + Math.abs(min)
};

//Solution 2

function maxDiff(list) {
    if (list.length <=1) return 0
    
    let max = Math.max(...list)
    let min = Math.min(...list)
    return max + Math.abs(min)
  };

//Solution 3

function maxDiff(list) { 
    if(!list.length) return 0; 
    return Math.max(...list) - Math.min(...list); 
};