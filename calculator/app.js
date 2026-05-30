
let input = document.querySelector("input")
console.log(input)

let getCharacter = (ch)=>{

    if(input.value != 0)
        input.value += ch;
    else
        input.value = ch;

}


// ! clear the input field 

let clearInput =()=>{
    input.value = ""
}

// ! calculation 

let calculate =()=>{

    let data = input.value ;
    // console.log(data)
    // console.log(eval(data))

    input.value =  eval(data)
}

// ! remove last character 

let removeLast =()=>{

    let data = input.value ;
    let updatedData = data.slice(0,-1)

    input.value = updatedData;
}