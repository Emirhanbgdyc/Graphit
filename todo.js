
const form= document.querySelector("#todoAddForm");
const input = document.querySelector("#todoNamee");
const todoList = document.querySelector(".list-group");
const formtext = document.querySelector(".form-text");

let todos =[];

runEvents();

function runEvents() {
  form.addEventListener("submit",addTodo);
}


function addTodo(e){
  const inputText = input.value.trim();
  if(inputText ==="" || inputText ==null){
    showAlert("warning","Lütfen boş bırakmayınız!");
  }else{
    addTodoToUI(inputText);
    addTodoToStorage(inputText);
    showAlert("success","Todo Eklendi.");
  }

  e.preventDefault();
}

function addTodoToUI(newTodo){

  const li = document.createElement("li");
  li.className ="list-group-item d-flex justify-content-between mt-3";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className ="delete-item";

  const i = document.createElement("i");
  i.className ="fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  input.value ="";
}

function addTodoToStorage(newTodo){
 checkTodosFormStorage();
 todos.push(newTodo);
 localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFormStorage(newTodo){
  if(localStorage.getItem("todos") == null){
    todos = [];
  }else{
  todos = JSON.parse(localStorage.getItem("todos"));
}
}

function showAlert(type, message){
    const div = document.createElement("div");

    div.className="alert alert-"+type;
    div.textContent=message;

    formtext.appendChild(div);

   setTimeout(function(){
    div.remove();
   },2500);
}
