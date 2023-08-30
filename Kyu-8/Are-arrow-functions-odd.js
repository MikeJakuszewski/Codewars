// DESCRIPTION:
// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function arrow(list) {
  return list.filter((val) => val % 2);
}
// solution 2

const odds = (values) => values.filter((val) => val % 2);
