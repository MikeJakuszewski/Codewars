// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//Solution 1



function persistence(num) {
    let counter = 0
  //   let str = String(num)
    while(num>9){
      num = num.toString().split('').reduce((acc,val) => +val * acc)
      counter ++
    }
    return counter
}

//Solution 2

function persistence(num){
    let counter = 0
    let str = String(num)
    while(str.length > 1){
        str = String([...str].reduce((acc,val) => acc * val) )
        counter ++
    }
    return counter ++
}



//Solution 3

function persistence(num) {
    for(let i=0; num>9;i++){
        num = num.toString().split('').reduce((acc,val) => +val * acc)
    }
    return i
}


// Wrong solution below (but my first working recurssive function)

function persistence(num) {
    if(num < 10){
      return num
    }else{
      return persistence(num.toString().split('').reduce((acc,val) => +val * acc))
    }
}

