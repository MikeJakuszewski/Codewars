// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

//Soluition 1

function noSpace(x){
    let greeting = String(x)
    return greeting.split(' ').join('')
}