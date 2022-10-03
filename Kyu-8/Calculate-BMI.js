// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//Solution 1

function bmi(weight, height) {
    let bmiWeight = (weight/height**2)
    if( bmiWeight <= 18.5){
      return 'Underweight'
    }else if(bmiWeight <= 25.0){
      return 'Normal'
    }else if(bmiWeight <= 30.0){
      return 'Overweight'
    }else if(bmiWeight >30.0){
      return 'Obese'
    }
}