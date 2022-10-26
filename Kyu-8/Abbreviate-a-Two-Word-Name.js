// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//solution 1

const abbrevName = name => name.split(' ').map( x => x.slice(0,1).toUpperCase()).join('.')

// solution 2

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

//solution 3

function abbrevName(name){

    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }