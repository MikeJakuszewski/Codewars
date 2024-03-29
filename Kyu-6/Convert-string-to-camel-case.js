// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//Solution 1

function toCamelCase(str){
    return str.split('-').join(' ').split('_').join(' ').split(' ').map((x,i) => i === 0? x : x[0].toUpperCase() +x.slice(1) ).join('')
}

//Solution 2

const toCamelCase = str => str.split('-').join(' ').split('_').join(' ').split(' ').map((x,i) => i === 0? x : x[0].toUpperCase() +x.slice(1) ).join('')

//Solution 3

function toCamelCase(str){ 
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
      let letter = arr[i];
      if(letter == '_' || letter == '-') {
        arr[i + 1] = arr[i + 1].toUpperCase(); //this makes the next letter capital and is added back into the arr array
        arr[i] = ''; // this replace the - or _ with nothing 
      } 
    }
    return arr.join('');
}
