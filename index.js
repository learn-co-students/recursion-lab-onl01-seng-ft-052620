// Code your solution here!

//printString() prints out all of the characters in a passed-in string:

function printString(s) {
    console.log(s[0])
    let start = 0
    let stringLength = s.length
    let endIndex = s.length - 1
    if (stringLength > 1) {
        start++
        printString(s.substring(start, endIndex + 1))
    }
    else {
        return true
    }
}



//reverseString() reverses all of the letters in a string:

function reverseString(s) {
    if (s.length == 1) { return s[0] }
    else {
        let sArr = s.split('')
        let str = sArr.pop()

        return str + reverseString(sArr.join(''))
    }
}


//isPalindrome() returns 'false' when string is not palindrome, 'true' if it is
function isPalindrome(s) {
    let length = s.length;
    if (length == 1) { return true }
    else if (s[0] === s[length - 1]) { return isPalindrome(s.slice(1, length - 1)) }
    else { return false }
}
//addUpTo() sums all members up to a given index in an array
function addUpTo(arr, index) {
    let sum = 0
    sum = sum + arr[0]

    if (arr.length == 1 && index + 1 == 1) {
        return arr[0]
    }
    else {

        return sum + addUpTo(arr.slice(1, index + 1), index - 1)
    }

}

//maxOf() finds the largest integer in an array
function maxOf(arr) {
    let len = arr.length
    if (arr.length == 1) { return arr[0] }
    else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}


//includesNumber() returns 'true'if the number is present in the array:
function includesNumber(arr, num) {

    if (arr.length == 1 && num == arr[0]) {
        return true
    }
    else {

        if (arr[0] == num) { return true }
        else {
            if (arr.length > 1) {
                arr.shift()
                return includesNumber(arr, num)
            }
        }
    }
    return false
}
