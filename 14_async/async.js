
// let fetcheddata = fetch("https://api.github.com/users")


// fetcheddata
// .then((data)=>{
//       let jsondata = data.json();
//       jsondata
//       .then((data)=>{
//         console.log(data)    // original data
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
// })
// .catch((err)=>{
//      console.log(err)
// })




let getData = async ()=>{

        try{

            let res = await fetch("https://api.github.com/users")
            console.log(res)
        
            let data = await res.json()
            console.log(data)
        }
        catch(err)
        {
            console.log(err)
        }
}

getData();