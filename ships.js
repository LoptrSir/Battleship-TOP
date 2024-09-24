//TOP Battleship Project
//ships.js

export const shipsData = [
    { ship: "Carrier", size: 5 },
    { ship: "Battleship", size: 4 },
    { ship: "Cruiser", size: 3 },
    { ship: "Submarine", size: 3 },
    { ship: "Destroyer", size: 2 },
  ];

export class Ship {
  constructor(name, size, orientation) {
    this.name = name;
    this.size = size;
    this.orientation = orientation;
    this.hitCounter = 0;
    this.isSunk = false;
    //declare vertical/horizontal?
  }

  getName() {
    return this.name;
  }

  getSize() {
    return this.size;
  }

  isVertical() {
    return this.orientation === "vertical";
  }

  hitCount() {
    return this.hitCounter;
  }

  increaseHitCount() {
    this.hitCount++;
    if (this.hitCount >= this.size) {
      this.isSunk = true;
    }
  }

  isSank() {
//build logic for announcing ship is sunk and checking for win.
    return this.isSunk;
  }
}
