// DESCRIPTION:
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

//Solution 1

function drawStairs(n) {
  if (n === 0) return "";
  if (n === 1) return "I";
  let staircase = "";
  for (let i = 1; i <= n; i++) {
    if (i === n) return (staircase += "I".padStart(i, " "));
    staircase += "I\n".padStart(i + 1, " ");
  }
}

//Solution 2

const drawStairs = (n) =>
  [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
