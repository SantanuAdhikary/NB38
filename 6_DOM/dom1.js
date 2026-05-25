
// ! How to target element 


//todo:  targetting by Id.

let logo =  document.getElementById("logo")
console.log(logo)

// todo: targetting by Tagname 

// this method return type is HTMLCollection(array)

// if we want to target indivisual element we have to use index. 

// if there is one element , then also it will return HTMLCollection.

let lists =  document.getElementsByTagName("li");
console.log(lists)

console.log(lists[0])
console.log(lists[1])
console.log(lists[2])


let btn = document.getElementsByTagName("button")
console.log(btn)
console.log(btn[0])


let navbar = document.getElementsByTagName("nav")
console.log(navbar)
console.log(navbar[0])

// todo:  targetting by classname

let cards = document.getElementsByClassName("card")
console.log(cards)
console.log(cards[0])
console.log(cards[1])
console.log(cards[2])

let main = document.getElementsByClassName("main")
console.log(main)      //HTMLCollection
console.log(main[0])



// ! 2.  How to Apply CSS 


//? step 1 : target the element 
//? step 2 : element.style.cssproperty = value 

let myLogo = document.getElementById("logo")
console.log(myLogo)
myLogo.style.color = "yellow"


// lists.style.color = "red" //! NOT POSSIBLE ❌
 lists[0].style.color = "red" // ✅


 main[0].style.backgroundColor = "blue"


//  target the section tag 

let section = document.getElementsByTagName("section")
console.log(section[0])

section[0].style.height="200px"
section[0].style.width="350px"
section[0].style.backgroundColor="white"
section[0].style.borderRadius="15px"
section[0].style.textAlign="center"
section[0].style.paddingTop="10px"
section[0].style.boxShadow="3px 4px 5px rgba(0,0,0,0.8)"
