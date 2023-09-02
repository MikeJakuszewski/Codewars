// DESCRIPTION:
// Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// Example:
// sequence : [2,4,6,8,1,2,5,4,3,2]
// predicate: is an even number
// result   : [2,4,6,8]
// Your task is to implement the takeWhile function.

// If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.

//Solution 1

function takeWhile (arr, pred) {
    if (arr.length<1) return []

    if(pred === 'Even'){
        return arr.filter(num => num%2 === 0)
    }else{
        return arr.filter(num => num%2 !== 0)
    }
}


function takeWhile (arr, pred) {
    if (arr.length<1) return []
    let newArr =[]

    if(pred === 'Even'){
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2===0){
                newArr.push(arr[i])
            }
        }
    }else{
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2 !==0){
                newArr.push(arr[i])
            }
        }
    }
    return newArr
}

console.log(takeWhile([1,2,3,4,5,6],'Even'), [2,4,6])
console.log(takeWhile([1,2,3,4,5,6],'Odd'), [1,3,5])
console.log(takeWhile([],'Even'), [])

