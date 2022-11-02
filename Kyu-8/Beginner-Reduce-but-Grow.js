// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Solution 1

function grow(x){
    return x.reduce((acc, val) =>{
      return acc *= val
    },1)
}

// Solution 2

const grow= x => x.reduce((a,b) => a*b);