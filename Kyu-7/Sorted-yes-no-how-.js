// DESCRIPTION:
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.



//Solution 1

function isSortedAndHow(array) {
    let arrayAsc = array.slice().sort((a,b) => a-b)
    let arrayDes = array.slice().sort((a,b) => b-a)
    
    console.log(arrayAsc, arrayDes, array)
    if(arrayAsc.toString() === array.toString()) return 'yes, ascending'
    if(arrayDes.toString() === array.toString()) return 'yes, descending'
    
    return 'no'
}

//Solution 2

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}
  