
// ! target the element 

let box = document.querySelector(".box")
console.log(box)

// ! applying css 

box.style.border = "2px solid black"
box.style.height = "350px"
box.style.width = "450px"


// ! inserting image
let url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfwROqLGWTxe59udlRcBXKeL-xLRGNvFKGw&s"



box.innerHTML = `<img src=${url}> <h2> Team Name : RCB</h2>`


// ! creating heading and inserting inside box 

let h2 = document.createElement("h2")
h2.innerText = "Player Name : Virat Kohli"
box.append(h2)



// ! task 2 : 


let players = ["rohit","virat","rahul","sanju","iyer","rinku","bumrah","shami","bhuvi","axar","varun"]


let ol = document.querySelector("ol")
console.log(ol)


players.map((ele)=>{
    // console.log(ele)

    let li = document.createElement("li")

    li.innerText = ele

    ol.append(li)
})


let products = [ 
                 {
                    productName : "laptop",
                    price : 50000,
                    rating : 4.5
                  },
                 {
                    productName : "camera",
                    price : 15000,
                    rating : 3.5
                  },
                 {
                    productName : "mobile",
                    price : 35000,
                    rating : 4
                  }
]


let main = document.querySelector("main")

products.map((ele)=>{

    let div = document.createElement("div")
    div.classList.add("card")


   div.innerHTML = `<h2> product name is : ${ele.productName} </h2>
                   <h2>price : ${ele.price}</h2> 
                   <h2> rating is : ${ele.rating}</h2>`


    main.append(div)
})


// ----