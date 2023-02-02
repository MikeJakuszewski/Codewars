// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//Solution 1

function solution(str){
    let newArr = []
     if(!str){
       return []
     }else if(str.length%2 === 0){
       for(let i=0;i<str.length;i+=2){
            newArr.push(str[i]+str[i+1])
       }
     }else{
       let arrStr = str.split('')
       arrStr.push('_')
       for(let i=0;i<arrStr.length;i+=2){
         newArr.push(arrStr[i]+arrStr[i+1])
       }
     }
    return newArr
  }

//Solution 2 -- the better solution 

function solution(str){
    let arr = str.split('')
    let res = []
 
    for(let i = 0; i<arr.length; i+=2){
      if(arr[i+1]) res.push(arr[i]+arr[i+1])
      else res.push(arr[i]+'_')
    }
 
   return res
 }