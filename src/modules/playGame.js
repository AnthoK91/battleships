import { humanPlayer, computerPlayer } from "./players";
import { placeShip, receiveAttack } from "./gameboard";
import { placeRandomAttack, getRandomInt } from "./computerTurn";

function createGridElement(x, y) {
  const rows = document.querySelectorAll(".row-data");
  const lastRow = rows[rows.length - 1]; // Get the most recently added row
  const newImg = document.createElement("img");
  newImg.src = "./img/image.png";
  newImg.className = "grid-box";

  newImg.style.margin = "1px";
  newImg.setAttribute("y-data", y);
  newImg.setAttribute("x-data", x);
  lastRow.append(newImg);
}

const humanTable = document.querySelector(".human-rows");
const computerTable = document.querySelector(".computer-rows");

function createNewRows(player) {
  const newRows = document.createElement("tr");
  newRows.className = "row-data";
  if (player === humanPlayer) {
    humanTable.appendChild(newRows);
  } else {
    computerTable.appendChild(newRows);
  }
}

function createBoard(player) {
  for (let index = 0; index < player.gameboard[0].length; index++) {
    let y = index;
    createNewRows(player);
    for (let index = 0; index < player.gameboard[0].length; index++) {
      createGridElement(index, y);
    }
  }
}

function placeShipDummyData() {
  placeShip(5, 5, humanPlayer, "north", "carrier");
  placeShip(4, 4, humanPlayer, "north", "battleship");
  placeShip(3, 3, humanPlayer, "north", "submarine");
  placeShip(2, 2, humanPlayer, "north", "vessel");
  placeShip(1, 1, humanPlayer, "north", "destroyer");

  placeShip(5, 5, computerPlayer, "north", "carrier");
  placeShip(4, 4, computerPlayer, "north", "battleship");
  placeShip(3, 3, computerPlayer, "north", "submarine");
  placeShip(2, 2, computerPlayer, "north", "vessel");
  placeShip(1, 1, computerPlayer, "north", "destroyer");
}
function startGame() {
  createBoard(humanPlayer);
  createBoard(computerPlayer);
  placeShipDummyData();
  nextTurn(); // Start the first turn
}

function nextTurn() {
  // Check if the game is over before proceeding
  if (humanPlayer.totalLengthRemaining <= 0) {
    console.log("Computer wins!");
    return;
  } else if (computerPlayer.totalLengthRemaining <= 0) {
    console.log("Human wins!");
    return;
  }

  // Alternate turns based on turnTracker
  if (turnTracker % 2 === 0) {
    console.log("Human player's turn");
    playerTurn();
  } else {
    console.log("Computer player's turn");
    setTimeout(() => {
      placeRandomAttack(getRandomInt(8), getRandomInt(8));
      turnTracker++;
      nextTurn(); // Call next turn after computer's move
    }, 1000); // Add a delay for the computer's move
  }
}

let turnTracker = 0;

function playerTurn() {
  computerTable.addEventListener("click", handlePlayerClick);
}

function handlePlayerClick(event) {
  const xData = event.target.getAttribute("x-data");
  const yData = event.target.getAttribute("y-data");

  if (!xData || !yData) return;

  if (computerPlayer.gameboard[yData][xData] === "x") {
    event.target.src = "./img/explode.png";
    console.log("Hit!");
  } else {
    event.target.src = "./img/miss.png";
    console.log("Miss!");
  }

  receiveAttack(yData, xData, computerPlayer, humanPlayer);

  // Remove event listener after player's turn to prevent multiple clicks
  computerTable.removeEventListener("click", handlePlayerClick);

  // Increment turn tracker and proceed to the next turn
  turnTracker++;
  nextTurn();
}

startGame();
