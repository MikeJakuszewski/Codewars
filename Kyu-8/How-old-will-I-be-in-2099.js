// DESCRIPTION:
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

//Solution 1

function calculateAge(y1, y2) {
  if (y1 - y2 == 1) return "You will be born in 1 year.";
  if (y2 - y1 == 1) return "You are 1 year old.";

  return y1 < y2
    ? `You are ${y2 - y1} years old.`
    : y1 > y2
    ? `You will be born in ${y1 - y2} years.`
    : "You were born this very year!";
}
