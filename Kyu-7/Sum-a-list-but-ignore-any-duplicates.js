// DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.


//Solution 1
function sumNoDuplicates(numList) {
 
    let newArr = numList.filter(x => numList.indexOf(x) == numList.lastIndexOf(x) )
    
    return newArr.reduce((acc,val) => acc+val,0)
}

//Solution 1- refactored

const sumNoDuplicates =numList => numList.filter(x => numList.indexOf(x) == numList.lastIndexOf(x)).reduce((acc,val) => acc+val,0)

