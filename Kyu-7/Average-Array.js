// ASC Week 1 Challenge 5 (Medium #2)
// Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

// Note: the function should also work with negative numbers and floats.

// Examples
// [ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

// 1st array: [1, 2, 3, 4]
// 2nd array: [5, 6, 7, 8]
//             |  |  |  |
//             v  v  v  v
// average:   [3, 4, 5, 6]
// And another one:

// [ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

// 1st array: [  2,   3,    9,   10,    7]
// 2nd array: [ 12,   6,   89,   45,    3]
// 3rd array: [  9,  12,   56,   10,   34]
// 4th array: [ 67,  23,    1,   88,   34]
//               |    |     |     |     |
//               v    v     v     v     v
// average:   [22.5, 11, 38.75, 38.25, 19.5]

//Solution 1

function avgArray(arr) {
  // Get the number of nested arrays
  const numOfArrays = arr.length;
  // Get the length of each nested array (assuming all nested arrays have the same length)
  const arrayLength = arr[0].length;
  // Initialize an array to store the average values
  const averages = [];

  // Iterate through each index of the nested arrays
  for (let i = 0; i < arrayLength; i++) {
    // Initialize a variable to store the sum of values at the current index
    let sum = 0;

    // Iterate through each nested array and add the value at the current index to the sum
    for (let j = 0; j < numOfArrays; j++) {
      sum += arr[j][i];
    }

    // Calculate the average by dividing the sum by the number of nested arrays
    const average = sum / numOfArrays;
    // Push the average value to the 'averages' array
    averages.push(average);
  }

  return averages;
}
