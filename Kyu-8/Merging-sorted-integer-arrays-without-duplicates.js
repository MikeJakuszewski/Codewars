// DESCRIPTION:
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//Solution 1

function mergeArrays(a, b) {
  let mergedArray = [...new Set(a.concat(b))];
  return mergedArray.sort((a, b) => a - b);
}
