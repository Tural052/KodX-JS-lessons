// localStorege -> key: name, value: JSON.stringify(value)

// localStorage.setItem("name","Tural")
// localStorage.setItem("surname","Xanaliyev")
// console.log(localStorage.getItem("name"))
// // localStorage.clear()

// localStorage.removeItem("surname")
const form = document.querySelector(".todo-form");
const input = document.getElementById("todo");
const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const container = document.querySelector(".container");

eventLister();

function eventLister() {
  form.addEventListener("submit", todoListSubmit);
  todoList.addEventListener("click", deteListItem);
  document.addEventListener("DOMContentLoaded", reloadPage);
}

// window.onload = () => {
//   console.log(localStorageGetTodo("todo"));
// };

function todoListSubmit(event) {
  let todo = input.value.trim().toUpperCase();
  if (todo !== "") {
    addTodoList(todo);
    localStorageAddTodo(todo, "todo");
    input.value = "";
  } else {
    alertFunction();
  }

  event.preventDefault();
}

function addTodoList(parmasValue) {
  todoList.innerHTML += `
  <li class="list-item">
    ${parmasValue} 
    <i class="fa-solid fa-xmark"></i>
  </li>`;
}

function alertFunction() {
  let div = document.createElement("div");
  div.className = "error-box";
  div.textContent = "Bos input !!!";
  container.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 2000);
}

function deteListItem(e) {
  let target = e.target;
  if (target.className === "fa-solid fa-xmark") {
    deleteLoaclStoareg(target)
    target.parentElement.remove();
  }
}

function deleteLoaclStoareg(target){
    let todos = localStorageGetTodo("todo");
    let removeTodo = target.parentElement.textContent.trim();
    let todoIndex = todos.indexOf(removeTodo)
    todos.splice(todoIndex,1)
    localStorage.setItem("todo",JSON.stringify(todos))
}

function localStorageAddTodo(todo, key) {
  let list = localStorageGetTodo(key);
  list.push(todo);
  localStorage.setItem(key, JSON.stringify(list));
}

function localStorageGetTodo(paramsKey) {
  let todos;
  if (localStorage.getItem(paramsKey) === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem(paramsKey));
  }
  return todos;
}

function reloadPage() {
  let todos = localStorageGetTodo("todo");
  todos.forEach((item) => {
    addTodoList(item)
  })
}
