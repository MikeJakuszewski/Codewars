// DESCRIPTION:
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//takese in two params - array, num
//array of nums - will negatives 
//num - used as parameter for number of evens we need
//return number in the order they are presented in


//Solution 1

function evenNumbers(array, number) {
    let arrayOfEvens = array.filter(x => x%2==0)
    return arrayOfEvens.slice(-number)
}
  
//Solution 2

function evenNumbers(array, number) {
    let arrayOfEvens = []
    for(let i=0;i<array.length; i++){
      if(array[i]%2 ===0){
        arrayOfEvens.push(array[i])
      }
    }
    return arrayOfEvens.slice(-number)
}

//Solution 3

const evenNumbers = (array, number) => array.filter(x => x%2==0).slice(-number)