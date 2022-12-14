// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//Solution 1

function getSum( a,b ){
    let nums =[]
    
    if(a === b){
        return a
      }else if(a>b){
      for(let i = b; i<= a; i++){
        nums.push(i)
      }
    }else{
      for(let i = a; i<= b; i++){
        nums.push(i)
      }
    }
  return nums.reduce((acc,val) => acc +val,0)
}

//solution 2

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}