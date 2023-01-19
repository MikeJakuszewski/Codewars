// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//Solution 1

const countBits = function(n) {
    //first, take integer and convert to binary
      //then, use split to make and array
      //filter out the 0
      //get the length
      
      let bin = n.toString(2)
      return bin.split('').filter( x => Number(x)).length
};

//Solution 2

const countBits = n => n.toString(2).split('').filter(x => Number(x)).length

//Solution 3

countBits = n => n.toString(2).split('0').join('').length;