// DESCRIPTION:
// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return str.split("").filter((item) => letters.includes(item)).length;
}
