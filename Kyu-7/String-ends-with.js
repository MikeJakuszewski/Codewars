// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//Solution 1

const solution = (str,ending) => str.split('').reverse().join('').slice(0,ending.length) == ending.split('').reverse().join('')

//Solution 2

function solution(str, ending){
    return str.endsWith(ending);
}