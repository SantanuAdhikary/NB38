

let p1 = new Promise((resolve,reject)=>{

    let num1 = 31 ;
    if(num1 % 2 == 0)
        resolve("resolve 1 : even number")
    else
        reject("reject 1 : odd number")

})

let p2 = new Promise((resolve,reject)=>{

    let num1 = -30 ;
    if(num1 >=0)
        resolve("resolve 2 : positive number")
    else
        reject("reject 2 : negative number")

})

let p3 = new Promise((resolve,reject)=>{

    let password =1234
    let confirmPass = 1234
    
    if(password == confirmPass)
        resolve("resolve 3 : login done")
    else
        reject("reject 3 : wrong password")

})

let p4 = new Promise((resolve,reject)=>{

    let num = 15 ;

    if(num % 5 == 0 && num % 3 == 0)
        resolve("resolve 4 : fizzBuzz")
    else
        reject("reject 4 : not fizzBuzz")

})



// !  Promise.any()


// console.log("-------------- any() method-----------------------")

// Promise.any([p1,p2,p3,p4])
//        .then((data)=>{
//             console.log(data)
//        })
//        .catch((err)=>{
//            console.log(err)
//        })


// ! 2. Promise.all()

// console.log("-------------- all() method-------------------")

// Promise.all([p1,p2,p3,p4])
//        .then((data)=>{
//             console.log(data)
//        })
//        .catch((err)=>{
//            console.log(err)
//        })



// ! 3.  Promise.allSettled()

// Promise.allSettled([p1,p2,p3,p4])
//        .then((data)=>{
//             console.log(data)
//        })
//        .catch((err)=>{
//            console.log(err)
//        })


// ! 4. Promise.race()


Promise.race([p3,p1,p2,p4])
       .then((data)=>{
            console.log(data)
       })
       .catch((err)=>{
           console.log(err)
       })



