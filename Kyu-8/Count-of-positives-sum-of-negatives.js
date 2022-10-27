// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//solution 1

function countPositivesSumNegatives(input) {    
//returning [] if a variable is null
      if(!input){
        return []
      }
// calculating the negatives of the array
      let negatives = input.reduce((acc, val) => {
        if( val < 0){
          return acc+=val    
        }else {
          return acc + 0
        }
      },0)
//calculating the positive numbers
      let positives = String(input).split(',').filter( x => {
        if( x> 0){
          return Number(x)
        }
      }).length
      
//returning [] if a values are [0,0] 
      if(positives === 0 && negatives === 0){
        return []
      }
    
    return [positives, negatives]
      
}

//solution 2
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    let positive = 0;
    let negative = 0;
    
    for (let i=0; i<input.length; i++)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}