// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true
  }
};

function reverseString(myString) {
  if (myString.length < 2) {
      return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0];  
    }
};

function isPalindrome(myString) {
  let l = myString.length;

  if (l < 2) {
    return true;
  } else if (myString[l - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, l - 1));
  } else {
    return false;
  }
};

function addUpTo (myArray, index) {
  console.log(myArray, index)
  if (index === 0){
    return myArray[0]
  } else { 
    return myArray[index] + addUpTo(myArray, --index);
  } 
}

function maxOf(myArray) {
  if (myArray.length === 1){
    return myArray[0]
  } else {
// a.) last element
// b.) value returned by recursive call fir n-1 elements
    return Math.max(myArray.pop(), maxOf(myArray))
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length){
    // base case, once array has been sliced up to nothing left to evalue, or its not an actual array of numbers...
    return false
  } else if (myArray[0] === myNumber) {
    // if the array has one number, and its the myNumber, cool
    // if the array has one number, but its not myNumber, it wont be true, and it will go into recurssion
    // then seeing that it can't be sliced on index = 1 (cause it doesnt exist), the length becomes then 0, so its a false
    return true
  } else {
    // a bunch of numbers, and we keep slicing one over until the myArray[n] === myNumber or no...
    return includesNumber(myArray.slice(1), myNumber)
  }
}