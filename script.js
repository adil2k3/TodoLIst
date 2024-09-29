const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector(".todoList");

let editTodo=null;

//function to add todo
const addTodo = () =>{
    let inputText = inputBox.value.trim();
    if(inputText.length<=0){
        alert("Write Something in your Todo");
    }else{

        if(addBtn.value==="Edit"){
            editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
            editTodo.target.previousElementSibling.innerHTML=inputText;
            addBtn.value="ADD"
            inputBox.value='';
            return false;
        }
        //creating p tag
        const li=document.createElement("li");
        const p=document.createElement("p");
        p.innerHTML=inputText;
        li.appendChild(p);

        // creating edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn","edBtn");
        li.appendChild(editBtn);

         // creating delete button
         const deleteBtn = document.createElement("button");
         deleteBtn.innerText = "Remove";
         deleteBtn.classList.add("btn","delBtn");
         li.appendChild(deleteBtn);


         todoList.appendChild(li);
         inputBox.value="";

         saveLocalTodos(inputText);
    }
}

//function to delete and edit todo

const updateTodo = (e) =>{
    if(e.target.innerHTML==="Remove"){
    todoList.removeChild(e.target.parentElement);
    deleteLocalTodos(e.target.parentElement);
    }

    if(e.target.innerHTML==="Edit"){
        inputBox.value= e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value="Edit";
        editTodo=e;
    }
}


// Toggle line-through on todo item

todoList.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked",);
        const p = e.target.firstElementChild;

        if(p.style.textDecoration === "line-through"){
            p.style.textDecoration="none";
        }else{
            p.style.textDecoration="line-through";
        }
    }
})

const saveLocalTodos = (todo) => {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

const getLocalTodos = () =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
        //creating p tag
        const li=document.createElement("li");
        const p=document.createElement("p");
        p.innerHTML=todo;
        li.appendChild(p);

        // creating edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn","edBtn");
        li.appendChild(editBtn);

         // creating delete button
         const deleteBtn = document.createElement("button");
         deleteBtn.innerText = "Remove";
         deleteBtn.classList.add("btn","delBtn");
         li.appendChild(deleteBtn);


         todoList.appendChild(li);
        })
    }
}

const deleteLocalTodos = (todo)=>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

const editLocalTodos = (todo) =>{
   let todos=JSON.parse(localStorage.getItem("todos"));
   let todoIndex=todos.indexOf(todo);
   todos[todoIndex]=inputBox.value;
   localStorage.setItem("todos",JSON.stringify(todos));
}
document.addEventListener("DOMContentLoaded",getLocalTodos);
addBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",updateTodo);