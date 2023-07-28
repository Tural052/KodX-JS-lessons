// function palindromString(paramStr){
//     let strLength = paramStr.length;
//     let halfLength = Math.floor(strLength/2)
//     for(let i=0;i<halfLength;i++){
//         if(paramStr[strLength-1-i].toLowerCase() !== paramStr[i].toLowerCase()){
//             console.log(false)
//             return
//         }
//     }
//     console.log(true)
// }

// palindromString("JvVj")

// ! Arrow function
// let arr = [1, 2, 3, 4]
// arr.forEach((index) => {
//     console.log(arr[index-1])
// })

// ! Function type =>
// ? 1) Function declaration
// ? 2) Function expression
// ? 3) Arrow function

// (function() {
//     console.log("saass")
// })()

//   (function () {
//     console.log("saass");
//   }
// )();

// (function () {
//   console.log("FOO!");
// })();

const form = document.querySelector(".todo-form");
const input = document.getElementById("todo");
const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const container = document.querySelector(".container");

eventLister()

function eventLister() {
  form.addEventListener("submit", (event) => {
    let todo = input.value.trim().toUpperCase();
    if (todo !== "") {
      addTodoList(todo);
      input.value = "";
    } else {
      alertFunction();
    }
  
    event.preventDefault();
  });
  todoList.addEventListener("click", deteListItem);
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
    console.log("aa");
  }, 2000);
}

function deteListItem(e) {
  let target = e.target;
  if (target.className === "fa-solid fa-xmark") {
    target.parentElement.remove();
  }
}
