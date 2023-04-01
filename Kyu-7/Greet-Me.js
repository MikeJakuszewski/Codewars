// DESCRIPTION:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//Solution 1

var greet = function(name) {
  
    let nameCap = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
    
    return `Hello ${nameCap}!`
    
  };

//Solution 2

  var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };