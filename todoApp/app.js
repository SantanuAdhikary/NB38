

let addBtn = document.getElementById("addBtn")
// console.log(addBtn)
let input = document.querySelector("input")
// console.log(input)

let ul = document.querySelector("ul")
// console.log(ul)

let todos = []

let editIndex = null;

addBtn.addEventListener("click",()=>{

    let data = input.value;
    // console.log(data)

    if(data=='') return

    if(editIndex == null)
    {
        todos.push(data)
    }
    else{ 
        todos[editIndex] = data;
        editIndex = null;
        addBtn.innerText = "ADD"
    }
    addTodo()
    input.value = ""
})



let addTodo =()=>{
    
    ul.innerText = ""

    todos.map((ele,index)=>{
        let li = document.createElement("li")
        li.innerHTML = `${ele} 
                       <button onclick="editTodo(${index})">edit</button> 
                       <button onclick="deleteTodo(${index})">delete</button>`;
        ul.append(li)
    })
}

let deleteTodo =(index)=>{
    todos.splice(index,1)
    addTodo();
    console.log("deleted")
}


let editTodo =(index)=>{

    // console.log(todos[index])
    // console.log("edit done")

    input.value = todos[index]
    editIndex = index
    addBtn.innerText = "UPDATE"
}