// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//Solution 1

function divCon(x){
    let numNums = x.filter(x=> Number.isInteger(x)).reduce((acc,val) => acc + val,0)
    let stringNums = x.filter(x=> !Number.isInteger(x)).reduce((acc,val) => +acc + +val,0)
    return numNums - stringNums
}

//Solution 2

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}