// DESCRIPTION:
// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

// Explanation
// In first example same elements are grouped together: (11)(22)(33), hence it should return true
// In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

//Solution 1

const isConsecutive = str => {
    const seen = new Set();
    let latest;
    
    for (const char of str)
      if (!seen.has(char))
        seen.add(latest = char);
      else if (latest !== char)
        return false;
    
    return true;
  }