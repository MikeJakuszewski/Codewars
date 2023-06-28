// DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

//Solution 1

function generateShape(integer) {
  let art = "";
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      art += "+";
    }
    if (i == integer - 1) return art;
    art += "\n";
  }
}

//Solution 2
function generateShape(n) {
  return ("+".repeat(n) + "\n").repeat(n).trim();
}
