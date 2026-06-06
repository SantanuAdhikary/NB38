
// console.log("start")



// // ! setTimeout()


// let wish =()=>{
//     console.log(" 🎂🤩Happy Birthday 🎂🤩")
// }


// setTimeout(wish,5000)


// setTimeout(()=>{
//     console.log("i am settimeout")
// },6000)



// // !  setInterval

// let sorry =()=>{
//     console.log("I am sorry 🥲🥲")
// }

// setInterval(sorry,1000)


// setInterval(()=>{
//     console.log("i am setInterval")
// },1000)


// console.log("end")




let t1 = setTimeout(()=>{
    console.log("hi")
},2000)

clearTimeout(t1);


let t2 = setInterval(()=>{
    console.log("hello")
},1000)

clearInterval(t2);