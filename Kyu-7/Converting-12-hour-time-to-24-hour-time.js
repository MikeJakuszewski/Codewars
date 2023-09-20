// DESCRIPTION:
// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
// On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.

//Solution 1

function to24hourtime(hour, minute, period) {
  if (hour >= 1 && hour <= 9 && period === "am") hour = `0${hour}`;
  if (minute >= 0 && minute <= 9) minute = `0${minute}`;

  if (hour === 12 && period === "am") {
    if (minute >= 0 || minute <= 9) {
      return `00${minute}`;
    }
    return `00${minute}`;
  }
  if (hour === 12 && period === "pm") {
    if (minute >= 0 || minute <= 9) {
      return `12${minute}`;
    }
    return `12${minute}`;
  }
  if (period === "pm") {
    return `${hour + 12}${minute}`;
  }
  return `${hour}${minute}`;
}
