

let arr1 = [10,20,30,40]

arr1.map((ele)=>{
    console.log(ele)
})

let names = ["sikhar","tabru","nikhil","gaja","santanu","vignesh","nagraj","vinod","laxmi"]

names.map((ele)=>{
    console.log(ele)
})

let players = [
    {
        playerName : "rohit",
        jerseyNo : 45,
        city:"mumbai"
    },
    {
        playerName : "virat",
        jerseyNo : 18,
        city:"bangalore"
    },
    {
        playerName : "manish pandey",
        jerseyNo : 9,
        city:"kolkata"
    },
    {
        playerName : "dhoni",
        jerseyNo : 7,
        city:"chennai"
    }
]

players.map((ele)=>{

    console.log(ele.playerName.toUpperCase())
    console.log(ele.jerseyNo)
    console.log(ele.city)
    console.log("-------------------------")
})