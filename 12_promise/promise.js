
console.log("promise in javascript")


let p1 = new Promise((resolve , reject)=>{

})

console.log(p1);

//! ---------------------------------------------------------------------

let p2 = new Promise((resolve,reject)=>{

    resolve("hello how are you")
})
console.log(p2)

// ! ---------------------------------------------------------------------

let p3 = new Promise((resolve,reject)=>{

    reject("we are fine")
})
console.log(p3)


//! ------------------- Handling the Promise ---------------------------

p2.then((data)=>{

    console.log(data)
})


p3
.catch((err)=>{
    console.log(err)
})



// ! ----------------------- Program by using Promise --------------------------------


let studentPromise = new Promise((resolve,reject)=>{
    let isStudying = false;
    if(isStudying)
        resolve("tomorrow we will give the mock 👨🏻‍💻")
    else
        reject("you keep waiting.. we will not give mock 😜")
})

studentPromise
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("if I give mock or not  I will come to the class and simply I will sit.")
})


console.log("end")