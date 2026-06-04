

// ! step 1 : target the form 

let studentForm = document.getElementById("studentForm")

console.log(studentForm)

// ! step 2 : add submit event 

studentForm.addEventListener("submit",(e)=>{

    // ! step 3: to stop the default behaviour of form
    e.preventDefault();


    // ! step 4 : target all the input , take the value and print 

    let username = document.getElementById("username").value 
    let useremail = document.getElementById("useremail").value 
    let userpass = document.getElementById("userpass").value

    console.log({username,userpass,useremail})
    console.log("form has submitted")

    //! step 5 : making all the input fields empty 

    document.getElementById("username").value  = ""
    document.getElementById("useremail").value = ""
    document.getElementById("userpass").value = ""
})