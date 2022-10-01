// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Solution 1

let findAverage = array => array <= 0 ? 0 : array.reduce((sum,val) => sum + val,0)/array.length