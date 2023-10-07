// var myLibrary = [];

// //

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
//   let Books = prompt("Write name of the book:");
//   let Pages = prompt("Write how many pages the book has:");
//   // let Status = prompt("Did you read book alredy?:");
//   myLibrary.push(Books);
//   myLibrary.push(Pages);
//   //myLibrary.push(Status);
//   ToDo();
// }
// function ToDo() {
//   const container = document.querySelector("#container");

//   const cord = document.createElement("div");
//   cord.classList.add("cord");

//   const bname = document.createElement("div");
//   bname.classList.add("name");

//   const bpage = document.createElement("div");
//   bpage.classList.add("page");

//   const bread1 = document.createElement("div");
//   bread1.classList.add("read");

//   const bread = document.createElement("input");
//   bread.type = "checkbox";
//   bread.classList.add("check");

//   bread1.textContent = "Alredy Read:";
//   bname.textContent = myLibrary[0];
//   bpage.textContent = myLibrary[1] + " pages";

//   bread1.appendChild(bread);
//   cord.appendChild(bname);
//   cord.appendChild(bpage);
//   cord.appendChild(bread1);

//   container.appendChild(cord);
//   myLibrary.splice(0, 3);
// }
// function Add() {
//   var cancelButton = document.getElementById("cancel");
//   var favDialog = document.getElementById("favDialog");
//   favDialog.showModal();
//   // Update button opens a modal dialog

//   // Form cancel button closes the dialog box
//   cancelButton.addEventListener("click", function () {
//     favDialog.close();
//   });
// }

// window.onload = function () {
//   // your code
//   // Get the modal
//   var modal = document.getElementById("myModal");

//   // Get the button that opens the modal
//   const btn = document.getElementsByClassName(".btn");

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks the button, open the modal
//   btn.onclick = function () {
//     modal.style.display = "block";
//     console.log("skldfjklsdjf");
//   };

//   // btn.addEventListener('click', function(){
//   //     modal.classList.remove("none")
//   //     console.log("sldkfjsdklfjskdl")
//   // })

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function () {
//     modal.style.display = "none";
//   };

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// };

// Get the modal
const modal = document.querySelector(".modal");
const btn = document.querySelector("#btn");
const overlay = document.querySelector(".overlay");
// When the user clicks the button, open the modal
btn.addEventListener("click", () => {
  //   modal.classList.remove("none");
  overlay.classList.add("active");
  modal.classList.add("active");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
};

const main = document.querySelector(".main");
const form = document.querySelector("form");
let k = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  const text = `
  <div id ="${k}card" class='card'> 
  <div class='name'>"${obj.bookName}"</div> 
  <div class='author'>By ${obj.author}</div>
  <div class='pages'>${obj.pages} pages</div>
  <button id="${k}" class ="read-btn" onclick = "Change(${k})">Read</button>
  <button onclick = "RemoveBtn('${k}card')">Remove</button>
  </div>`;
  k += 1;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  main.innerHTML += text;
  form.reset();
});

function Change(buttonId) {
  const read = document.getElementById(buttonId);
  console.log(read);
  if (read.innerHTML == "Read") {
    read.classList.remove("read-btn");
    read.classList.add("unread-btn");
    read.innerHTML = "Unread";
  } else {
    read.classList.remove("unread-btn");
    read.classList.add("read-btn");
    read.innerHTML = "Read";
  }
}

function RemoveBtn(Id) {
  const rem = document.getElementById(Id);
  rem.remove();
}
