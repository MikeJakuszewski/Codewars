// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//Solution 1

function solution(string) {
    return string.split('').map(x => x == x.toUpperCase() ? ` ${x}` : x).join('')
}

//Solution 2

const solution = string => string.split('').map(x => x == x.toUpperCase() ? ` ${x}` : x).join('')