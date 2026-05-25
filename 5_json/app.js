
// ! json

// JSON (JavaScript Object Notation) is a lightweight data-interchange format 

// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 





// ! create one object 


let emp = {
    ename : "miller",
    eid : 101,
    isMarried : true
}
console.log(emp)
console.log(typeof emp)  // object


// ! 1. JSON.stringify()

// JSON.stringify() method is used to convert any  javascript object into json string.

// typeof json is string.

 let jsonData =  JSON.stringify(emp)
 console.log(jsonData)
 console.log(typeof jsonData)   // string


 let arr = [1,2,3,4]
 console.log(arr)
 console.log(typeof arr)


let jsonArr = JSON.stringify(arr)
console.log(jsonArr)
console.log(typeof(jsonArr))   // string 


// !  JSON.parse()


// JSON.parse() is used to convert any json string data into javascript object.

let emp2 = JSON.parse(jsonData)
console.log(emp2)
console.log(typeof emp2)

let arr2 = JSON.parse(jsonArr)
console.log(arr2)
console.log(typeof arr2)




let a = "hi" 
let b = 10 

console.log(typeof a )  // string 
console.log(typeof b )  // number 

console.log(typeof typeof a )  //string 
console.log(typeof typeof b )  // string

