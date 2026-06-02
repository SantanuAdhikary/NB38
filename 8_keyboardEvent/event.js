
let h1 = document.getElementById("heading1")
// console.log(h1)
let changeColor =()=>{
    h1.style.color = "red"
    console.log("hi")
}


// !   Event Listener 


// todo : step 1 : target the element 

let btn2 = document.getElementById("btn2")
console.log(btn2)

// todo step 2: apply the event 

btn2.addEventListener("click", (event)=>{
    
    // console.log("i am eventlistener")
    let h2 = document.getElementById("heading2")
    // console.log(h2)
    h2.style.color = "green"
    console.log(event)
    console.log(event.type)
    console.log(event.target)
})


let m1 =()=>{
    console.log(" i am m1")
}
let m2 =()=>{
    console.log(" i am m2")
}

let btn4 = document.getElementById("btn4")

btn4.addEventListener("click",()=>{
    console.log("i am first click event")
})
btn4.addEventListener("click",()=>{
    console.log("i am second click event")
})


// ! keyboard event 

let inp1 = document.getElementById("inp1")
// console.log(inp1)

inp1.addEventListener("keydown",()=>{
    console.log("key is pressed")
})

inp1.addEventListener("keyup",(e)=>{
    // console.log(e.target.value)
    // console.log("key is up")
    let box = document.getElementById("box")
    box.innerHTML = `<h2> ${e.target.value} </h2>`
})