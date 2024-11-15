import { receiveAttack } from "./gameboard";
import { humanPlayer, computerPlayer } from "./players";

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(8));

export function placeRandomAttack(yCo, xCo) {
  const selectedCell = document.querySelector(
    `[y-data="${yCo}"][x-data="${xCo}"]`
  );

  if (!selectedCell) {
    console.error(`couldn't find grid cell - tried ${yCo} and ${xCo}`);
    return;
  }

  // Check the gameboard BEFORE calling receiveAttack
  const isShipHit = humanPlayer.gameboard[yCo][xCo] === "x";

  if (
    receiveAttack(yCo, xCo, humanPlayer, computerPlayer) === "already been hit!"
  ) {
    placeRandomAttack(getRandomInt(8), getRandomInt(8));
  } else if (isShipHit) {
    selectedCell.src = "./img/explode.png";
  } else {
    selectedCell.src = "./img/miss.png";
  }
}
