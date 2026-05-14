
// !  Array

console.log("welcome to javascript array")

// Array is a linear datastructure where we can store multiple values in a continuous manner.

// Array is index based and it starts from 0.

// In javascript we can store both homogeneous and heterogeneous kind of data in array.


// ! how to declare Array

let arr = [10,"hi",true,undefined,null]

console.log(arr)

// ! how to access elements from array

// ? syntax:   arrayname[index]

console.log(arr[1])
console.log(arr[0])


// ! how to know the length of array.

console.log(arr.length)


// ! Array Methods 

// ! 1. push()

// push() method is used to add element at the end of array.

// push() method will return the length of the modified array.

let players = ["virat","rohit","iyer"]
players.push("dhoni")
console.log(players)


// ! 2. pop()

// pop() method is used to remove the last element.

// it will return the removed element.

let teams = ["rr","pk","rcb","csk"]

teams.pop();
console.log(teams)


// ! 3.  unshift()

// it is used to add the element at the start of the array.

// it will return the length of the modified array.

players.unshift("hardik")
console.log(players)

// ! 4. shift()

//  shift() method is used to remove the element from the start.

// it will return the removed element.

teams.shift()
console.log(teams)


// ! 5. indexOf()

// indexOf() method is used to know the index of the given element.

// it will take the first occurance of the given element.

let numbers = [10,20,30,40,10,20]

console.log(numbers.indexOf(10))    // 0 
console.log(numbers.indexOf(30))   //2
console.log(numbers.indexOf(20))  //1


// ! 6. lastIndexOf()

// indexOf() method is used to know the index of the given element.

// it will take the last occurance of the given element.


console.log(numbers.lastIndexOf(10))    // 4
console.log(numbers.lastIndexOf(20))   // 5
console.log(numbers.lastIndexOf(50))  // -1

console.log(numbers.lastIndexOf(30))  // 2


// ?note : if any element is not present then indexOf() and lastIndexOf() returns -1;

//? if any element is present only one time, then indexOf() and lastIndexOf() return same value.


// ! 7. includes()

// includes() method is used to check given element is present or not.
// it will return boolean value.

console.log(numbers.includes(10))    // true
console.log(numbers.includes(100))  // false

// ! 8. concat()

// concat() method is used to merge/combine two or more than two arrays and it returns one new array.

let users = ["virat","rohit","dhoni"]
let id = [18,45,7]

let combined = users.concat(id);
console.log(combined)


// ! 9. reverse()

// reverse() method is used to reverse the array and it is returning one new array. 

// this method will modify the original array.

let subjects = ["html","css","js","sql","java","python","react"]
console.log(subjects)

let rev = subjects.reverse()

console.log(rev)
console.log(subjects)


// ! 10. join() 

// join() method is used to convert array into string.

let arr10 = ['j','a','v','a','s','c','r','i','p','t']

console.log(arr10.join(''))


// !  reverse string by using inbuilt method

let subject = "javascript"

let subjectArr = subject.split('')
console.log(subjectArr)

subjectArr.reverse()
console.log(subjectArr)

let revStr = subjectArr.join('')
console.log(revStr)

let myName = "santanu"

// ! in single line

let ans = myName.split('').reverse().join('')
console.log(ans)

// ! 11. slice()

// ! 12. splice() 


// ! delete  by using splice()
let a = [10,20,30,40,50,60]
a.splice(1,3);
console.log(a)            // [10, 50, 60]

// ! replace by splice()
let  b = [10,20,30,40,50,60]
b.splice(1,3,900)
console.log(b)            // [10, 900, 50, 60]

// ! add by splice()
let c = [10,20,30,40,50,60]
c.splice(1,0,15)
console.log(c)          // [10, 15, 20, 30, 40, 50, 60]