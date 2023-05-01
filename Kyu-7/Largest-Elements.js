// DESCRIPTION:
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

//Solution 1

function largest(n, array) {

    if(n==0) return []
    return array.sort((a,b) => a-b).slice(-n)
}

//Solution 2

const largest = (n, array) => n >0 ? array.sort((a,b) => a-b).slice(-n) : []