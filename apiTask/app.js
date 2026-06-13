

let getData = async ()=>{

    try{

        let res = await fetch("https://api.github.com/users")
        let data = await res.json()
        
        displayData(data)
    }
    catch(err)
    {
        console.log(err)
    }
}

getData()


let main = document.querySelector("main")

let displayData =(data)=>{

    data.map((ele)=>{

        let div = document.createElement("div")
        div.classList.add("card")

        div.innerHTML = `<img src=${ele.avatar_url}> <h2> ${ele.login} </h2>`

        main.append(div)
    })
}

