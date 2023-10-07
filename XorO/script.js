// const Player = (name, level) => {
//   let health = level * 2;
//   const getLevel = () => level;
//   const getName = () => name;
//   const die = () => {
//     // uh oh
//   };
//   const damage = (x) => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };
//   const attack = (enemy) => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
//   };
//   return { attack, damage, getLevel, getName };
// };

// const jimmie = Player("jim", 10);
// const badGuy = Player("jeff", 5);
// badGuy.attack(jimmie);
// jimmie.die();

// (function () {
//     const body = document.querySelector("body")
//   console.log(body);
// })();

const Gameboard = () => {
  const table = ["", "", "", "", "", "", "", "", ""];
  let c = 0;
  const board = document.querySelector(".gameboard");
  table.forEach(function (i) {
    board.innerHTML += `<div class="box" id="${c}">${i}</div>`;
    c += 1;
  });
};
ClickAbleBoxes(table);

function ClickAbleBoxes(array) {
  let X = "X";
  let O = "O";
  const btn1 = document.getElementById("1");
  const btn2 = document.getElementById("2");
  btn1.addEventListener("click", () => {
    btn1.classList.add("clicked");
    btn2.classList.remove("clicked");
    X = "X";
    O = "O";
  });
  btn2.addEventListener("click", () => {
    btn2.classList.add("clicked");
    btn1.classList.remove("clicked");
    O = "X";
    X = "O";
  });
  const boxs = document.querySelectorAll(".box");
  boxs.forEach((i) => {
    i.addEventListener("click", () => {
      array[i.id] = X;
      i.innerHTML = array[i.id];
      i.classList.add("unclickable");
      [X, O] = [O, X];
      whoWin(array);
    });
  });
}

function whoWin(ex) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winConditions.forEach((j) => {
    const findMatch = j.map((x) => ex[x]);
    if (
      findMatch.every((filed) => filed == "X") ||
      findMatch.every((field) => field == "O")
    ) {
      Gameboard();
    }
  });
}
