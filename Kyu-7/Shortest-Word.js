// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Solution 1

function findShort(s){
    let shortestWord = s.split(' ').sort((a,b) =>a.length > b.length? 1:-1).shift()
    return shortestWord.length
}

//Solution 2

const findShort = s => s.split(' ').sort((a,b) =>a.length > b.length? 1:-1).shift().length

//Solution 3 
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

//Solution 4
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;