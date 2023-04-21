// DESCRIPTION:
// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

//Solution 1


//the array will not be empty, just numbers, two numbers
// We are returning a number, the difference between the largest and the smallest

function difference(arr){
    //find the smallest number
    let smallest = Math.min(...arr)
    //find the largest number
    let largest = Math.max(...arr)

    //subtract the difference
    return largest - smallest
}

//Solution 2

const betweenExtremes = arr => Math.max(...arr) - Math.min(...arr)

//Solution 3

function difference(arr){
    let smallest =arr[0]
    for(let i=1;i<arr.length;i++){
        if(smallest> arr[i]){
            smallest =arr[i]
        }
    }
    let largest =arr[0]
    for(let i=1;i<arr.length;i++){
        if(largest < arr[i]){
            largest =arr[i]
        }
    }
    return largest - smallest
}