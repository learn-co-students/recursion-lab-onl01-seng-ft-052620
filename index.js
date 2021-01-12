const { addBehavior } = require("sinon");

// Code your solution here!
function printString(myString){
    console.log(myString[0]);
 
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(string){
    if (string.length <= 1 || string === null) {
        return string
      } else {
        return reverseString(string.substring(1)) + string[0];
      } 
}

function isPalindrome(string){
  if(string.length == 1){
    return true
  } else if (string.length < 1 || string == null){
    return false
  } else {
    if(string[0] == string[string.length-1]){
      return isPalindrome(string.substring(1, string.length-1))
    } else {
      return false
    }
  }
}

function addUpTo(array, index){
  if(index > 0){
    array[0] += array[index]
    return addUpTo(array, index-1)
  } else {
    return array[0]
  }

}

function maxOf(array){
  if(array.length > 1){

    if(array[0] < array[array.length-1]) {

      array[0] = array[array.length-1]

      return maxOf(array.slice(0, array.length-1))

    }else if(array[0] > array[array.length-1]){

      return maxOf(array.slice(0, array.length-1))

    } else {

      return maxOf(array[array.length-1])
    }

  } else {
    return array[0]
  }

}

function includesNumber(array, number){
  if(array.length == 0 || array == null){
    return false
  }
  if (array[0] == number){
    return true
  } else {
    let new_array = array.slice(1, array.length)
    return includesNumber(new_array, number)
  }
}

