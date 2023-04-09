// DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//Solution 1

function switcheroo(x){
    let newString = ''
    let alpha = {
      a: 'b',
      b: 'a',
      c: 'c'
    }
    
    for(let i=0; i<x.length;i++){
      newString += alpha[x[i]]
    }
    return newString
}

//Solution 2

function switcheroo(x){
    return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
}

//Solution 3

const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');