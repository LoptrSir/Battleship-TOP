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
    if (orientation !== "horizontal" && orientation !== "vertical") {
      throw new Error(
        `${orientation} is invalid. Select 'horizontal' of 'vertical'`
      );  //try/catch block 
    } else {
      this.orientation = orientation;
      return this.orientation;
    }
  }

  getHitCounter() {
    //*Jest works
    //does it make sense to have a function to call the constructor status or should I just call it directly??
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

  increaseHitCount() {
    //*Jest works
    this.hitCounter++;
    if (this.hitCounter >= this.size) {
      this.isSunk = true;
      //x.sunkShips++; //fix this call
    }
    //insert logic to check is (Gameboard.sunkShips <= 5) if true announce win
  }
}
