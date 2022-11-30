// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//Solution 1

function validatePIN (pin) {
    return (pin.length === 4 || pin.length === 6) && pin.split('').every(char => ['1','2','3','4','5','6','7', '8', '9', '0'].includes(char))
}