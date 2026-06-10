


let displayTime =()=>{

    let now = new Date();
    let time = now.toLocaleTimeString();
    // console.log(time)

    let h1 = document.querySelector("h1")
    h1.innerText = time;

    let today = now.toLocaleDateString();
    document.querySelector("h3").innerText = today;
   
}
// ! for first time
displayTime()

// ! displaying repeatedly
setInterval(displayTime,1000)