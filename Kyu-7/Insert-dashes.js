// DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//Solution 1

function insertDash(num) {
    const stringNum = num.toString()
    let numNew = ''
    
    for(let i=0;i<stringNum.length-1;i++){
      if(stringNum[i]%2 > 0 && stringNum[i+1]%2 > 0){
        numNew += `${stringNum[i]}-`
      }else{
        numNew += stringNum[i]
      }
    }
    return numNew + stringNum[stringNum.length-1]
  }

//Solution 2

function insertDash(num) {
    const stringNum = num.toString()
    let numNew = ''
    
    for(let i=0;i<stringNum.length;i++){
      if(stringNum[i]%2 > 0 && stringNum[i+1]%2 > 0){
        numNew += `${stringNum[i]}-`
      }else{
        numNew += stringNum[i]
      }
    }
    return numNew 
  }
