//TOP Battleship Project
//ships.js

export const shipsData = [
  { name: "Carrier", size: 5 },
  { name: "Battleship", size: 4 },
  { name: "Cruiser", size: 3 },
  { name: "Submarine", size: 3 },
  { name: "Destroyer", size: 2 },
];

export class Ship {
  constructor(name, size, orientation) {
    this.name = name;
    this.size = size;
    this.setOrientation(orientation);
    this.hitCounter = 0;
    this.isSunk = false;
  }

  getName() {
    //*Jest works
    return this.name;
  }

  getSize() {
    //*Jest works
    return this.size;
  }

  setOrientation(orientation) {
    //*Jest works
    // this.orientation = orientation === 'vertical' ?  'vertical' : 'horizontal';
    if (orientation !== "horizontal" && orientation !== "vertical") {
      throw new Error(
        `${orientation} is invalid. Select 'horizontal' of 'vertical'`
      );
    } else {
      this.orientation = orientation;
      return this.orientation;
    }
  }

  getHitCounter() {
    //*Jest works
    return this.hitCounter;
  }

  getIsSunk() {
    //*Jest works
    //build logic for announcing ship is sunk and checking for win.
    //insert logic to test it all ships sunk?
    return this.isSunk;
  }

  getIsVertical() {
    //*Jest works
    return this.orientation === "vertical";
  }

    //this function probably belongs in gameboard/gameplay
  increaseHitCount() {
    //*Jest works
    this.hitCounter++;
    if (this.hitCounter >= this.size) {
      this.isSunk = true;
    }
    //insert logic to check is (gameBoard.sunkShips <= 5) if true announce win
  }
}
