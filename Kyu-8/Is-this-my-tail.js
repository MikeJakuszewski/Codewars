// DESCRIPTION:
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

//Solution 1

function correctTail(bod, tail){
    let sub = bod.substr(bod.length-(tail.length))
    
    if (sub == tail){
      return true
      
    }else {
      return false
    }
}

//Solution 2

const correctTail = (bod,tail) => bod[bod.length-1] === tail

//Solution 3

const correctTail = (x,y)=>x.endsWith(y)