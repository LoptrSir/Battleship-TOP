//TOP Battleship Project
//ships.js

//import { player1, player2, currentPlayer, currentBoard } from "./1gameboard.js";

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
      //is this proper orientation setting if instance is created elsewhere?
      // this.orientation = null;
      this.setOrientation(orientation); //Is this the best option, or declare and update via function when instance is created?
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
  
    // setOrientation(orientation) {
    //   //*Jest works
    //   if (orientation !== "horizontal" && orientation !== "vertical") {
    //     // throw new Error(
    //     //   `${orientation} is invalid. Select 'horizontal' of 'vertical'`
    //     // );  //try/catch block 
    //    let result = prompt ('Invalid orientation, enter "horizontal"or "vertical"');
    //    return this.setOrientation(result);
    //   } else {
    //     this.orientation = orientation;
    //     return this.orientation;
    //   }
    // }
  
    getHitCounter() {
      //*Jest works
      return this.hitCounter;
    }
  
    getIsSunk() {
      //*Jest works
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
        //update total sunk ships
        //call isGameWon() //here or in manageShotResult()?
      }
    }
  }