// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//Solution 1

function count (string) {  
    return string.split('').reduce((acc,val) => {
      
      if(!acc[val]){
        acc[val] = 0
      }
      acc[val]++
      return acc
      
    },{})
}

//Solution 2
function count (string) {  
    let count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }