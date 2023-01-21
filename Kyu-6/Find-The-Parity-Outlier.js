// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//Solution 1

function findOutlier(integers){
    let evens = []
    let odds = []
    
    integers.filter((x) => x%2 === 0? evens.push(x): odds.push(x))
                    
    if(evens.length ===1){
      return evens[0]
    }else{
      return odds[0]
    }
}

//Solution 2
function findOutlier(int){
    let even = int.filter(a=>a%2==0);
    let odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }