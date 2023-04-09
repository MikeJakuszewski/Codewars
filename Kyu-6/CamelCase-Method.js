// DESCRIPTION:
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

//Solution 1

String.prototype.camelCase=function(){
  
    return word.split(' ').map((x,i) => x[0].toUpperCase() + x.slice(1)).join('')

}


//Solution 2

String.prototype.camelCase=function(){
  
    return this.split(' ').map((x,i) => x.slice(0,1).toUpperCase() + x.slice(1)).join('')
  
  }
