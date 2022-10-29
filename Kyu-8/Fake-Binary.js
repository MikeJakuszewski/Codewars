// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Solution 1 - My solution

function fakeBin(x){

    return x.split('').map(x =>{
      if(Number(x) >=5 ){
        return 1
      }else{
        return 0
      }
    }).toString().split(',').join('')
  }

//Solution 2

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
