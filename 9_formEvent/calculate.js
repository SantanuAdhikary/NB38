

let form = document.querySelector("form")
console.log(form)

let output = document.getElementById("output")


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let num1 = parseInt( document.getElementById("num1").value)
    let num2 = parseInt( document.getElementById("num2").value )

    output.innerHTML = `<h1>the addition of ${num1} and ${num2} is ${num1 + num2}</h1>`

    console.log("done")
})


// ! dark and light theme 

let btn = document.getElementById("btn")
let outer = document.querySelector(".outer")

btn.addEventListener("click",()=>{

    outer.classList.toggle("dark")
})