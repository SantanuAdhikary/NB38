

let p = new Promise((resolve,reject)=>{

    // resolve("hi")
    reject("bye")
})

console.log(p)

p.then((data)=>{

    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(console.log("i am finally"))