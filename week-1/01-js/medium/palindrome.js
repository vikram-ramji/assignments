/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  reversedString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  if (str == reversedString) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
