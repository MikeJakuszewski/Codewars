// DESCRIPTION:
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

//Solution 1

let websites = []
for(let i=1;i<=1000;i++){
websites.push('codewars')
}

//solution 2

var websites = new Array(1000).fill("codewars");

var websites = []
