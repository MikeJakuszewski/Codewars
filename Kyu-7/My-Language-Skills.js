// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

//Solution 1

function myLanguages(results) {
    let lang = []
    
    for(let result in results){
      if(results[result] >=60) lang.push([result, results[result]])
    }
    lang.sort((a,b) =>  b[1] - a[1])

    
    let topLang = []
    for(let i=0;i< lang.length;i++){
      topLang.push(lang[i][0])
    }
    
    return topLang
  }