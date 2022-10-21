// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My solution 1

function getCount(str) {
    //   let vowels
      let a = str.split('').filter( x => x.includes('a')).join('').length
      let e = str.split('').filter( x => x.includes('e')).join('').length
      let i = str.split('').filter( x => x.includes('i')).join('').length
      let o = str.split('').filter( x => x.includes('o')).join('').length
      let u = str.split('').filter( x => x.includes('u')).join('').length
      
      return a+e+i+o+u
    }


// Solution 2

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => vowels.includes(letter)).length;
  }