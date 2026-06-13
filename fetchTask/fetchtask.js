


let fetcheddata = fetch("https://fakestoreapi.com/products")
let ol = document.querySelector("ol")
fetcheddata
.then((data)=>{

    let jsondata = data.json();
    jsondata
    .then((data)=>{
           
          data.map((ele)=>{
            console.log(ele.title)

            let li = document.createElement("li")
            li.innerText = ele.title
            ol.append(li)
          
          
          })
    })
    .catch((err)=>{
            console.log(err)
    })
})
.catch((err)=>{
      console.log(err)
})