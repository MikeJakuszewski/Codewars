// DESCRIPTION:
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

//Solution 1

function validateHello(greetings) {
  let lowerCase = greetings.toLowerCase();
  let hellos = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];

  for (let i = 0; i < hellos.length; i++) {
    if (lowerCase.includes(hellos[i])) return true;
  }
  return false;
}

// Solution 2

const hellos = {
  hello: "english",
  ciao: "italian",
  salut: "french",
  hallo: "german",
  hola: "spanish",
  ahoj: "czech republic",
  czesc: "polish",
};

const validateHello = (greetings) => {
  for (const key in hellos) {
    if (greetings.toLowerCase().includes(key)) {
      return true;
    }
  }
  return false;
};

//Solution 3

function validateHello(greetings) {
  let lowerCase = greetings.toLowerCase();
  return lowerCase.includes("hello")
    ? true
    : lowerCase.includes("ciao")
    ? true
    : lowerCase.includes("salut")
    ? true
    : lowerCase.includes("hallo")
    ? true
    : lowerCase.includes("hola")
    ? true
    : lowerCase.includes("ahoj")
    ? true
    : lowerCase.includes("czesc")
    ? true
    : false;
}
