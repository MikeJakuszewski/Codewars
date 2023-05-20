// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

//Solution 1

function whatday(num) { 
    if (num < 1 || num > 7) return 'Wrong, please enter a number between 1 and 7'
    let day =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    
    return day[num-1]
}

//Solution 2

function whatday(num) { 
    let day =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    
    return day[num-1] || 'Wrong, please enter a number between 1 and 7'
}