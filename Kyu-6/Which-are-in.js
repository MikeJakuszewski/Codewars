// DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

//Solution 1

function inArray(array1,array2){
    let newArr = []
    
    for(let x of array1){
        for(let i=0; i<array2.length;i++ ){
            if(array2[i].includes(x)){
                newArr.push(x)
            }
        }
    }
    return [...new Set(newArr)].sort()
}

//Soltion 2

function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
}

//Solution 3

function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.includes(a1)))
      .sort()
}