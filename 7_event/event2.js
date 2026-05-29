

// ! click event 

let wish = ()=>{

    console.log("happy birthday 🥳🎂")
}


//! chage the background color of div

let changeColor = ()=>{

    let box1 = document.querySelector(".box1")
   
    box1.style.backgroundColor = "blue" 
}


// ! dblClick event

let add =()=>{
   alert("i am addition function")
}


// ! create increase function 

let num = 0 ;
let h2 = document.getElementById("count")
let increase =()=>{

    num = num + 1 ; 
    h2.innerText = num
    console.log('increasing')
}


// ! mouseover event 

let cbc =()=>{
    
    let box2 = document.querySelector(".box2")
    
    box2.style.backgroundColor = "pink"
}
// ! mouseout event 

let cbc2 =()=>{
    let box2 = document.querySelector(".box2")
    
    box2.style.backgroundColor = "blue"
}

// ! mousemove event 

let c = 0 ;
let box3 = document.querySelector(".box3")
let increaseNumber =()=>{

    c = c + 1 ; 
   
    box3.innerHTML = `<h1> ${c} </h1>`;
}

// ! task for copy text and display

let copyText =()=>{

    let card1 = document.querySelector(".card1")
    let content = card1.innerHTML
    console.log(content)

    let card2 = document.querySelector(".card2")
    card2.innerHTML = content

    card1.innerText = ""
    console.log("copied")

}