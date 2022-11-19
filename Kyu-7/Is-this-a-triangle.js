// DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//Solution 1

function isTriangle(a,b,c){
    let numbers =[a,b,c]
    let orderedNums = numbers.sort((a,b) => a-b)
    return ((orderedNums[0] + orderedNums[1])>orderedNums[2])
  
}

//Solution 2

function isTriangle(a,b,c){
   return a + b > c && a + c > b && c + b > a;
}

//Solution 3

function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}