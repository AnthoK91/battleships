import { humanPlayer, computerPlayer } from "./players";
import { placeShip, receiveAttack } from "./gameboard";
import { placeRandomAttack, getRandomInt } from "./computerTurn";
import { shipsConfig } from "./htmlChangeAspect";

function createGridElement(x, y, player) {
  const rows = document.querySelectorAll(".row-data");
  const lastRow = rows[rows.length - 1];
  const newImg = document.createElement("img");
  newImg.src = "./img/image.png";

  // Set class based on player
  if (player === humanPlayer) {
    newImg.className = "grid-box human-grid-box";
  } else {
    newImg.className = "grid-box computer-grid-box";
  }

  // Set attributes for x and y coordinates
  newImg.style.margin = "1px";
  newImg.setAttribute("y-data", y);
  newImg.setAttribute("x-data", x);

  // Add event listeners
  if (player === humanPlayer) {
    // Add dragover and drop event listeners
    newImg.addEventListener("dragover", (event) => {
      event.preventDefault(); // Allow the drop
    });
    newImg.addEventListener("drop", dropHandler); // Use dropHandler function
  } else {
    // For computer grid, add click event listener for attacks
    newImg.addEventListener("click", handlePlayerClick);
  }

  lastRow.append(newImg);
}

function dropHandler(event) {
  event.preventDefault();

  const shipType = event.dataTransfer.getData("text/plain");
  console.log("Dropped shipType:", shipType);

  if (!shipType) {
    console.error("No shipType found in dataTransfer.");
    return;
  }

  const configEntry = shipsConfig.find((config) => config.shipId === shipType);

  if (!configEntry) {
    console.error(`Ship ID "${shipType}" not found in shipsConfig.`);
    return;
  }

  const aspectElement = document.querySelector(`#${configEntry.aspectId}`);
  if (!aspectElement) {
    console.error(`Aspect element not found for "${shipType}"`);
    return;
  }

  const aspect = aspectElement.textContent.split(": ")[1];
  const x = parseInt(event.target.getAttribute("x-data"));
  const y = parseInt(event.target.getAttribute("y-data"));

  const result = placeShip(y, x, humanPlayer, aspect.toLowerCase(), shipType);

  if (result === "out of bounds") {
    console.log("Invalid placement!");
  } else {
    console.log(`Placed ${shipType} at (${y}, ${x}) facing ${aspect}`);
    document.getElementById(shipType).draggable = false; // Disable further dragging

    // Update the aspect text to indicate the ship is placed
    aspectElement.textContent = `Ship Placed`;

    // Get the ship's coordinates
    const shipCoords = humanPlayer.ships[shipType].coords;

    // Update the grid cells by changing the border to blue
    shipCoords.forEach(([yCoord, xCoord]) => {
      const gridCell = document.querySelector(
        `.human-grid-box[x-data="${xCoord}"][y-data="${yCoord}"]`
      );

      if (gridCell) {
        // Change the border to blue
        gridCell.style.border = "2px solid blue";
      } else {
        console.error(`Grid cell not found at x=${xCoord}, y=${yCoord}`);
      }
    });
  }
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
      createGridElement(index, y, player);
    }
  }
}

// placeShip(5, 5, humanPlayer, "north", "carrier");
// placeShip(4, 4, humanPlayer, "north", "battleship");
// placeShip(3, 3, humanPlayer, "north", "submarine");
// placeShip(2, 2, humanPlayer, "north", "vessel");
// placeShip(1, 1, humanPlayer, "north", "destroyer");

function placeComputerShips() {
  function randInt(max) {
    return Math.floor(Math.random() * max);
  }
  function aspect() {
    const number = randInt(4);
    switch (number) {
      case 0:
        return "north";
      case 1:
        return "east";

      case 2:
        return "south";

      case 3:
        return "west";
    }
    return aspect;
  }
  placeShip(randInt(8), randInt(8), computerPlayer, aspect(), "carrier");
  placeShip(randInt(8), randInt(8), computerPlayer, aspect(), "battleship");
  placeShip(randInt(8), randInt(8), computerPlayer, aspect(), "submarine");
  placeShip(randInt(8), randInt(8), computerPlayer, aspect(), "vessel");
  placeShip(randInt(8), randInt(8), computerPlayer, aspect(), "destroyer");
  console.table(computerPlayer.gameboard);
}
export function startGame() {
  createBoard(humanPlayer);
  createBoard(computerPlayer);
  placeComputerShips();
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
