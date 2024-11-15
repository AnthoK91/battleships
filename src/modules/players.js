import { playerShips as shps } from "./ship";

function createGameboard() {
  return [
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
  ];
}

// Create a Player class/factory.
// There will be two types of players in the game, ‘real’ players and ‘computer’ players.
// Each player object should contain its own gameboard.

export class Player {
  constructor(gameboard, ships) {
    (this.gameboard = createGameboard()),
      (this.ships = ships),
      (this.totalLengthRemaining = 15); // Moved here
    this.missedAttacksTotal = 0; // Moved here
  }
}

export const humanPlayer = new Player(createGameboard(), shps);
export const computerPlayer = new Player(createGameboard(), shps);
