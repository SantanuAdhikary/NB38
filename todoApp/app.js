

let addBtn = document.getElementById("addBtn")
// console.log(addBtn)
let input = document.querySelector("input")
// console.log(input)

let ul = document.querySelector("ul")
// console.log(ul)

let todos = []

addBtn.addEventListener("click",()=>{

    let data = input.value;
    // console.log(data)

    if(data=='') return

    todos.push(data)

    addTodo()

    input.value = ""

})



let addTodo =()=>{
    
    ul.innerText = ""

    todos.map((ele,index)=>{
        let li = document.createElement("li")
        li.innerHTML = `${ele} 
                       <button>edit</button> 
                       <button onclick="deleteTodo(${index})">delete</button>`;
        ul.append(li)
    })
}

let deleteTodo =(index)=>{
    todos.splice(index,1)
    addTodo();
    console.log("deleted")
}