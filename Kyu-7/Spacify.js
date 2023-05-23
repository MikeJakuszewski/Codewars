// DESCRIPTION:
// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

//Solution 1

function spacify(stirng){

    let newString = ''
    for(let i =0;i<stirng.length;i++){
        if(stirng.length-1 === i ) return  newString += stirng[i]
        newString += stirng[i] + ' '
    }
}

console.log(spacify('Hello World'), 'H e l l o   W o r l d')

//Solution 2

function spacify(stirng){

    let newString = ''
    for(let i =0;i<stirng.length;i++){
        newString += stirng[i] + ' '
    }
    return newString.trim()
}

console.log(spacify('Hello World'), 'H e l l o   W o r l d')

//Solution 3

function spacify(stirng){
    return stirng.split('').map((letter,i) => stirng.length-1 === i? letter : letter + ' ').join('')
}

console.log(spacify('Hello World'), 'H e l l o   W o r l d')

//Solution 4

const spacify = stirng => stirng.split('').map((letter,i) => stirng.length-1 === i? letter : letter + ' ').join('')

//Solution 5

function spacify(str) {
    return str.split("").join(" ");
}