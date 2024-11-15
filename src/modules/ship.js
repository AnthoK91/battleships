export class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.coords = [];
    this.hit = 0;
  }

  getHit() {
    return this.hit++;
  }
  isSunk() {
    if (this.hit >= this.length) {
      return (this.sunk = true);
    }
  }
}

export const playerShips = {
  carrier: new Ship(5),
  battleship: new Ship(3),
  submarine: new Ship(4),
  vessel: new Ship(2),
  destroyer: new Ship(1),
};

export const playerTwoShips = {
  carrier: new Ship(5),
  battleship: new Ship(3),
  submarine: new Ship(4),
  vessel: new Ship(2),
  destroyer: new Ship(1),
};
