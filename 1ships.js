//TOP Battleship Project
//ships.js

//import { gameStateInstance } from ".1gameState.js";
//import { player1, player2, player1Board, player2Board } from "./1gameboard.js"; 

export const shipsData = [
    { name: "Carrier", size: 5 },
    { name: "Battleship", size: 4 },
    { name: "Cruiser", size: 3 },
    { name: "Submarine", size: 3 },
    { name: "Destroyer", size: 2 },
  ];
  
  //since Gameboard.sunkShips needs to be updated. Do I add an instanceGameBoard to constructor IE: look at Gameboard this.gamePlay
  export class Ship {
    constructor(name, size, orientation, gameBoardInstance ) {
      this.gameboard = gameBoardInstance;
      this.name = name;
      this.size = size;
      this.orientation = orientation;
      this.hitCounter = 0;
      this.isSunk = false;
    }
  
    increaseHitCount() {
      //*Jest works
      this.hitCounter++;
      if (this.hitCounter >= this.size) {
        this.isSunk = true;
        // //*below causes Jest to fail* Need to mock external classes
        // this.gameboard.sunkShips++; 
        // if (this.gameboard.isSunk >= 5) {
        //   //call gameWon logic here or in manageShotResult()?
        // }
      }
    }
  }