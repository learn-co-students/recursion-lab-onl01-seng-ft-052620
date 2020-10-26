function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(string) {
    if (string === "") {
        return ""
    } else {
        return reverseString(string.substring(1)) + string[0];
    }
}

function isPalindrome(string) {
    if (string.length <= 1) {
      return true;
    }
  
    let [ firstLetter ] = string;
    let lastLetter = string[string.length - 1];
  
    if (firstLetter === lastLetter) {
      let mySubString = string.substring(1, string.length - 1);
      return isPalindrome(mySubString);
    } else {
      return false;
    }
  }

function addUpTo(array, i) {
    if (i) {
        return array[i] + addUpTo(array, i - 1)
    } else {
        return array[i]
    }
}

function maxOf(array) {
    if (array.length === 1) {  
        return array[0];
   } else {  
       return Math.max(array.shift(), maxOf(array));
   }
}

function includesNumber(array, num) {
    if (array.length < 1) {
        return false;
    } else if (array[0] === num) {
        return true;
    } else {
        return includesNumber(array.slice(1), num);
    }
}