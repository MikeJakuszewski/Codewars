// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//Solution 1

function moveZeros(arr) {
    let newArr = []
    let numberOfZeros = arr.filter( x => x===0).length
    let filteredZeros = arr.filter( x => {
      if(x!==0){
        newArr.push(x)
      }
    })
    
    for(let i=0; i<numberOfZeros;i++){
      newArr.push(0)
    }
    
    
    return newArr
  }