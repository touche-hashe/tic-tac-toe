let ul = document.querySelector("ul");
let lis = document.querySelectorAll(".li");
let again = document.querySelector(".again");
let result = document.querySelector(".result");
let xone = document.querySelectorAll(".xone");
let xtwo = document.querySelectorAll(".xtwo");
let xthree = document.querySelectorAll(".xthree");
let yone = document.querySelectorAll(".yone");
let ytwo = document.querySelectorAll(".ytwo");
let ythree = document.querySelectorAll(".ythree");
let wone = document.querySelectorAll(".wone");
let wtwo = document.querySelectorAll(".wtwo");
function select() {
  lis.forEach((element) => {
    element.onclick = (e) => {
      if (e.target.textContent == "") {
        e.target.textContent = "X";
        winner();
        enemy();
      }
    };
  });
}
function looping(element) {
  let empty = Array.from(element).filter((e) => e.textContent == "");
  if (empty.length === 0) return;

  let random = Math.floor(Math.random() * empty.length);
  empty[random].textContent = "O";
}

function enemy() {
  if (enemyMove(xone, "X")) return;
  if (enemyMove(xtwo, "X")) return;
  if (enemyMove(xthree, "X")) return;
  if (enemyMove(yone, "X")) return;
  if (enemyMove(ytwo, "X")) return;
  if (enemyMove(ythree, "X")) return;
  looping(lis);
  winner();
}

function checkWin(arr, symbol) {
  return Array.from(arr).every(
    (ele) => ele.textContent.trim().toUpperCase() === symbol
  );
}
function enemyMove(arr, symbol) {
  let filled = Array.from(arr).filter(
    (e) => e.textContent.trim().toUpperCase() === symbol
  );
  let empty = Array.from(arr).filter((e) => e.textContent == "");
  if (filled.length === 2 && empty.length === 1) {
    empty[0].textContent = "O";
    return true;
  }
  return false;
}

function winner() {
  let xWin =
    checkWin(xone, "X") ||
    checkWin(xtwo, "X") ||
    checkWin(xthree, "X") ||
    checkWin(yone, "X") ||
    checkWin(ytwo, "X") ||
    checkWin(ythree, "X") ||
    checkWin(wone, "X") ||
    checkWin(wtwo, "X");
  let owin =
    checkWin(xone, "O") ||
    checkWin(xtwo, "O") ||
    checkWin(xthree, "O") ||
    checkWin(yone, "O") ||
    checkWin(ytwo, "O") ||
    checkWin(ythree, "O") ||
    checkWin(wone, "O") ||
    checkWin(wtwo, "O");
  if (xWin) {
    result.textContent = "wins:X";
    setTimeout(() => {
      refresh();
    }, 2000);
  } else if (owin) {
    result.textContent = "wins:O";
    setTimeout(() => {
      refresh();
    }, 2000);
  }
  let ending = Array.from(lis).every((e) => {
    return e.textContent !== "";
  });
  if (ending) {
    if (!xWin) {
      result.textContent = "losing...";
      setTimeout(() => {
        refresh();
      }, 2000);
    }
  }
}
function refresh() {
  lis.forEach((element) => {
    element.textContent = "";
    result.textContent = "wins:";
  });
}
again.addEventListener("click", refresh);
winner();
select();
