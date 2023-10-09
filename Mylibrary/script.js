const btn = document.querySelector("#btn");
const overlay = document.querySelector(".overlay");
const main = document.querySelector(".main");
const form = document.querySelector("form");
let k = 0;

// Code with class
class Library {
  constructor() {}

  openPopup() {
    overlay.classList.add("active");
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == overlay) {
        overlay.classList.remove("active");
      }
    };
    form.addEventListener("submit", start.addBook);
  }

  addBook() {
    event.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    const text = `
            <div id ="${k}card" class='card'> 
            <p class='name'>"${obj.bookName}"</p> 
            <p class='author'>By ${obj.author}</p>
            <p class='pages'>${obj.pages} pages</p>
            <button id="${k}" class ="unread-btn" onclick = "start.Change(${k})">Unread</button>
            <button onclick = "start.RemoveBtn('${k}card')">Remove</button>
            </div>`;
    k += 1;
    overlay.classList.remove("active");
    main.innerHTML += text;
    form.reset();
  }

  Change(buttonId) {
    const read = document.getElementById(buttonId);
    if (read.innerHTML == "Unread") {
      read.classList.add("read-btn");
      read.innerHTML = "Read";
    } else {
      read.classList.remove("read-btn");
      read.innerHTML = "Unread";
    }
  }

  RemoveBtn(Id) {
    const removeBook = document.getElementById(Id);
    removeBook.remove();
  }
}
let start = new Library();
btn.addEventListener("click", start.openPopup);

// Code without class (Function code)

// function openPopup() {
//   overlay.classList.add("active");
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//     if (event.target == overlay) {
//       overlay.classList.remove("active");
//     }
//   };
// }

// function addBook(event) {
//   event.preventDefault();
//   const fd = new FormData(form);
//   const obj = Object.fromEntries(fd);
//   const text = `
//     <div id ="${k}card" class='card'>
//     <p class='name'>"${obj.bookName}"</p>
//     <p class='author'>By ${obj.author}</p>
//     <p class='pages'>${obj.pages} pages</p>
//     <button id="${k}" class ="unread-btn" onclick = "Change(${k})">Unread</button>
//     <button onclick = "RemoveBtn('${k}card')">Remove</button>
//     </div>`;
//   k += 1;
//   overlay.classList.remove("active");
//   main.innerHTML += text;
//   form.reset();
// }

// function Change(buttonId) {
//   const read = document.getElementById(buttonId);
//   if (read.innerHTML == "Unread") {
//     read.classList.add("read-btn");
//     read.innerHTML = "Read";
//   } else {
//     read.classList.remove("read-btn");
//     read.innerHTML = "Unread";
//   }
// }

// function RemoveBtn(Id) {
//   const removeBook = document.getElementById(Id);
//   removeBook.remove();
// }

// btn.addEventListener("click", openPopup);
//form.addEventListener("submit", addBook);
