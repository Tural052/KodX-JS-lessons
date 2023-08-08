const list = document.querySelector(".container>ul");

// Fech ->
// let baseUrl = "https://jsonplaceholder.typicode.com/users";
// let data = fetch(baseUrl)
//   .then((response) => response.json())
//   .then((data) => data)
//   .catch((err) => console.log(err));

// fulfilled, rejected, pending

// asinxron ve sinxron funksiyar -> async await
let data;
document.addEventListener("DOMContentLoaded", async() => {
  data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
    if(data){
        addListItem(data);
    }
});

// innerHTML, innerText, textContent
function addListItem(data){
    console.log(data);
    data.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.address.zipcode;
        list.appendChild(li);
    })
}

// function addListItem(data) {
//     console.log(data);
//     data.forEach((item) => {
//       list.innerHTML += `
//           <li>
//          <p>${item.name}</p>
//          <a href="mailto:${item.email}">${item.email}</a>
//          </br>
//          <a href="tel:">${item.phone}</a>
//           </li>
//           `;
//     });
//   }
  