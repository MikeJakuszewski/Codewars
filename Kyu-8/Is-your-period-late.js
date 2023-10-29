// DESCRIPTION:
// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

//Solution 1

function periodIsLate(last, today, cycleLength) {
  const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const daysPassed = Math.round(Math.abs((today - last) / millisecondsInDay));
  return daysPassed > cycleLength;
}
