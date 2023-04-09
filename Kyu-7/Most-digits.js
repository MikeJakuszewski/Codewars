// DESCRIPTION:
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

//Solution 1

function findLongest(array){
    let num = array[0].toString().length 
    let largestVal = array[0]
    for(let i=0; i<array.length-1;i++){
      if( num < array[i+1].toString().length){
        num = array[i+1].toString().length
        largestVal = array[i+1]
      }
    }
  return largestVal
}

//Solution 2

const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

//Solution 3

function findLongest(array){
    let num = '0';
    for(let i=0; i<array.length; i++) {
      let string = array[i].toString();
      if(string.length > num.length) {
        num = string;
      }
    }
    return parseInt(num);
  }