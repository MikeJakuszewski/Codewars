// DESCRIPTION:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Solution 1

const simpleMultiplication = number => number * (number%2? 9 : 8)