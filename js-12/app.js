const list = document.querySelector(".container>ul");
const input = document.getElementById("todo");
const addBtn = document.querySelector(".todo-form");

const baseURL = "http://localhost:3000/todos";

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  addBtn.addEventListener("submit", addTodo);
  list.addEventListener("click", clickList);
}

function loadAllTodosToUI() {
  let todos = fetch(baseURL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  let todoListSortById = todos.then((data) => data.sort((a, b) => a.id - b.id));
  todoListSortById.then((data) => {
    data.forEach((todo) => {
      list.innerHTML += `<li data-id="${todo.id}">${todo.name}<span>
      <a class="edit" href="#">D</a>
      <a class="delete" href="#">X</a></span></li>`;
    });
  });
}

function addTodo(e) {
  let newTodo = input.value;
  if (newTodo === "") return alert("Lütfen bir todo giriniz");
  putFechedDataToUI(newTodo);
  input.value = "";
  e.preventDefault();
}

function putFechedDataToUI(paramsTodo) {
  fetch(baseURL, {
    method: "POST",
    body: JSON.stringify({
      name: paramsTodo,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      list.innerHTML += `<li data-id="${data.id}">${data.name}<a class="edit" href="#">D</a>
      <a class="delete" href="#">X</a></span></li>`;
    });
}

function clickList(event) {
  let target = event.target;
  if (target.className === "delete") {
    deleteTodo(target);
  } else if (target.className === "edit") {
    editTodo(target);
  }
}

function deleteTodo(paramsTarget) {
  let id = paramsTarget.parentElement.parentElement.getAttribute("data-id");
  paramsTarget.parentElement.parentElement.remove();
  deleteTodoFromAPI(id);
}

function deleteTodoFromAPI(parmsId) {
  fetch(baseURL + "/" + parmsId, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

function editTodo(paramsTarget) {
  let id = paramsTarget.parentElement.parentElement.getAttribute("data-id");
  let todo = prompt("Yeni todo giriniz");
  paramsTarget.parentElement.parentElement.innerHTML = `${todo}<a class="edit" href="#">D</a>
    <a class="delete" href="#">X</a></span>`;
  updateTodoFromAPI(id, todo);
}

function updateTodoFromAPI(parmsId, parmsTodo) {
  fetch(baseURL + "/" + parmsId, {
    method: "PUT",
    body: JSON.stringify({
      name: parmsTodo,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
