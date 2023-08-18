// DESCRIPTION:
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//Solution 1

function remove(string) {
  return string.endsWith("!")
    ? remove(string.split("").slice(0, -1).join(""))
    : string;
}
