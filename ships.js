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
    //constructor(name, size) {
    this.name = name;
    this.size = size;
    // this.orientation = orientation;
    this.setOrientation(orientation);
    this.hitCounter = 0;
    this.isSunk = false;
  }

  getName() { //*
    return this.name;
  }

  getSize() { //*
    return this.size;
  }

  setOrientation(orientation){
    // this.orientation = orientation === 'vertical' ?  'vertical' : 'horizontal';
    if (orientation === 'horizontal' || orientation === 'vertical') {
      this.orientation = orientation;
      return this.orientation;
    } else {
      //throw new Error('Invalid orientation');
      //insert code to address bad input

    }
  }

  getIsVertical() { //*
    return this.orientation === "vertical";
  }

  getHitCounter() { //*
    return this.hitCounter;
  }

  increaseHitCount() {
    this.hitCounter++;
    if (this.hitCounter >= this.size) {
      this.isSunk = true;
    }
  }

  getIsSunk() { //*
//build logic for announcing ship is sunk and checking for win.
    return this.isSunk;
  }
}
