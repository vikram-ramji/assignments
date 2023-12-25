/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  if (str1.length != str2.length) {
    return false;
  } else {
    str1Object = convertStrToObject(str1);
    str2Object = convertStrToObject(str2);
    for (let i = 0; i < str1.length; i++) {
      if (str1Object[str1[i]] != str2Object[str1[i]]) {
        return false;
      }
    }
    return true;
  }
}

function convertStrToObject(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj
}

module.exports = isAnagram;
