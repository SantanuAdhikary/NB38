

let fetchedData = fetch("https://fakestoreapi.com/products")

console.log(fetchedData); // Promise 

fetchedData
.then((data)=>{
    console.log(data)  // Response 
    let jsondata = data.json();
    console.log(jsondata); // Promise 


    jsondata
    .then((data)=>{
           console.log(data)   // original data 
    })
    .catch((err)=>{
          console.log(err)
    })
})
.catch((err)=>{
    console.log(err)
})