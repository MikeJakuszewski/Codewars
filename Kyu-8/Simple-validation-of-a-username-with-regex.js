// DESCRIPTION:
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

//Solution 1

function validateUsr(username) {
  if (username.length > 16 || username.length < 4) return false;
  const valid = "abcdefghijklmnopqrstuvwxyz1234567890_";

  for (let i = 0; i < username.length; i++) {
    if (!valid.includes(username[i])) return false;
  }
  return true;
}
