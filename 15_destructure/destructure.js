


// ! Rest Parameter 

function m1(a,b,...c)
{
  console.log(a)
  console.log(b)
  console.log(c)
}

m1(10,20,30,40,50)



// ! shallow copy 


let arr1 = [10,20,30]
let copy = arr1 ; 

copy.push(40)
arr1.shift()

console.log("arr1 is ",arr1)
console.log("copy is ",copy)  


// ! Deep Copy


let arr2 = [50,51,52]

let copy2 = [...arr2] 

copy2.push(53)

console.log("arr2 ",arr2)
console.log("copy2 ",copy2)


// ! deep copy by using JSON methods

let players = ["rohit","suriya","pandya","bumrah"]

let miPlayers = JSON.parse(  JSON.stringify(players) )

players.push("sachin")

console.log("players ",players)
console.log("mi players ",miPlayers)

// !  spread operator 


let frontend = ["html","css","js","react"]
let backend = ["java","python","node","sql"]

let webdev = [...frontend,...backend]
console.log(webdev)


// !  Object Destructure 


let emp = {
    ename : "miller",
    eid : 101,
    sal : 1234567,
    dept : "BA"
}

let {eid,ename , dept } = emp
console.log(ename)
console.log(eid)



// !  array Destructure

let actors = ["suriya","vijay","vijay2","kamal hasan","rajinikanth","vikram"]


let [singham,thalapathy,setupathi, ...superstar ] = [...actors]

console.log(singham)
console.log(thalapathy)
console.log(setupathi)
console.log(superstar)


