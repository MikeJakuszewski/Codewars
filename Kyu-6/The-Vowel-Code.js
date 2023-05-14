// DESCRIPTION:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//Solution 1

function encode(string) {
    const vowels = 'aeiou'
    const vowel ={
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }
    return string.split('').map(letter => vowels.includes(letter)? vowel[letter]: letter).join('')
}



function decode(string) {
    const numbers = '12345'
    const num ={
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u'
    }
    return string.split('').map(number => numbers.includes(number)? num[number]: number).join('')
}


console.log(encode('hello'),'h2ll4')
console.log(encode('Winter is Coming'), 'W3nt2r 3s C4m3ng')
console.log(decode('Str22t'), 'Street')