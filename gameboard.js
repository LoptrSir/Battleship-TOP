//Battleship TOP Project
//gameboard.js

import { GamePlay } from "./gamePlay.js";
//import { gamePlayInstance } from "./gamePlay.js";
import { Ship } from "./ships.js";
import { shipsData } from "./ships.js";

//does it make sense to break up Gameboard into an addl class GamePlay/Player to handle placeShip, takeShot, changePlayer meaning things that are a mechanic of playing the game not creating the board?
export class Gameboard {
  gridSize = 10;
  constructor(name) {
    this.name = name; //player/ai name
    this.board = Array(this.gridSize)
      .fill(null)
      .map(() => Array(this.gridSize).fill(null));
    this.ships = []; //to track board pieces// seems to be redundant with this.board
    this.shipsList = new Set();
    this.numberOfShips = 0;
    this.missedShots = [];
    this.sunkShips = 0;
  }

  getName() {
    //*Jest works but is based on undefined result. need logic to assign player/ai name.
    return this.name;
  }
  getBoard() {
    //*Jest works
    return this.board;
  }

  getShipsList() {
    //*Jest works
    return this.shipsList;
  }

  getNumberOfShips() {
    //*Jest works
    return this.numberOfShips;
  }

  getMissedShots() {
    //is this redundant if this.board tracks atacked?
    return this.missedShots;
  }

  getSunkShips() {
    //*Jest works
    return this.sunkShips;
  }

  //chooseShip() will eventually be DOM manipulated. use global calls in mean time to place ships.  Adjust function once modified for DOM as needed.
  chooseShip(shipName, column, row, orientation) {
    if (this.shipsList.has(shipName)) {
      throw new Error(`${shipName} has already been placed.`); //try/catch block to reset chooseShip
    }
    const shipDetails = shipsData.find((ship) => ship.name === shipName);
    //console.log(shipName); //works
    //console.log('chooseShip', shipDetails); //works

    if (!shipsData) {
      throw new Error("Ship not found");
      //likely unneeded when DOM is handling chooseShip
      //try/catch block to reset
    }

    const shipInstance = new Ship(
      shipDetails.name,
      shipDetails.size,
      orientation
    );
    //console.log('shipInstance', shipInstance); //works
    this.shipsList.add(shipName);
    //console.log('shipsList', this.shipsList); //works
    return this.placeShip(shipInstance, column, row);
    // return gamePlayInstance.placeShip(shipInstance, column, row);
  }

  placeShip(ship, column, row) {
    //*Jest works
    let occupiedCells = [];
    if (ship.getIsVertical()) {
      //check if inbounds
      if (row + ship.size > this.gridSize || column < 0 || row < 0)
        return false; //change to throw new Error, adjust test as needed
      //throw new Error('Invalid Placement');
      //try/catch block to reset
      //check if occupied
      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column, row + i)) return false; //change to throw new Error, adjust test as needed
        //throw new Error('Invalid Placement');
        //try/catch block to reset
        //check if occupied
      }
      //place ship on board
      for (let i = 0; i < ship.size; i++) {
        this.board[column][row + i] = {
          ship: ship,
          attacked: false,
        };
        occupiedCells.push([column, row + i]);
        //Probably will remove occupiedCells as this.board can manage this
      }
    } else {
      if (column + ship.size > this.gridSize || column < 0 || row < 0)
        return false; //change to throw new Error, adjust test as needed
      //throw new Error('Invalid Placement');
      //try/catch block to reset
      //check if occupied

      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column + i, row)) return false; //change to throw new Error, adjust test as needed
        //throw new Error('Invalid Placement');
        //try/catch block to reset
        //check if occupied
      }

      for (let i = 0; i < ship.size; i++) {
        this.board[column + i][row] = {
          ship: ship,
          attacked: false,
        };
        occupiedCells.push([column + i, row]);
        //Probably will remove occupiedCells as this.board can manage this
      }
    }
    this.ships.push({ ship: ship, occupiedCells: occupiedCells }); //this seems redundant when board gets updated with this
    this.numberOfShips++; //is this really needed?
    console.log("placeShip", this.board);
    return true; //logic to move to next step?
  }

  isWithinBounds(column, row) {
    //*Jest works
    return (
      column >= 0 && column < this.gridSize && row >= 0 && row < this.gridSize
    );
  }

  isCellAvailable(column, row) {
    //*Jest works
    if (!this.isWithinBounds(column, row)) return false; //does this need to throw new Error? or does parent function address this? //change to throw new Error, adjust test as needed
    //throw new Error('Invalid Placement');
    //try/catch block to reset

    //check if occupied
    return this.board[column][row] === null; // Check if cell is available
  }

  //Need to incorporate calls to update DOM as appropriate
  makeAttack(column, row) {
    if (this.isWithinBounds(column, row) === false) {
      throw new Error("Invalid shot, try again");
      //with DOM UI control this becomes unneeded
      //try/catch block to resolve error and reset makeAttack
    }
    const cell = this.board[column][row];
    if (cell.attacked) {
      return "Already Attacked"; //change to throw new Error, adjust test as needed
      //throw new Error('Invalid Placement');
      //try/catch block to reset
    }
    cell.attacked = true; //updates boolean to true
    if (cell.ship) {
      //logic to update shipHit/HitCount/isSunk/isGameWon
      //DOM UI logic to dispay Hit
      //validate if x.constructorItem is proper.
      x.hitCounter++; //proper way to increase count?
      if (x.hitCounter >= x.size) {
        x.isSunk = true;
        this.sunkShip++; //proper way to increase count?
      }
      if (this.sunkShips >= 5) {
        //DOM logic for playAgain/update games won counter(if used)
        return `You sank my ${this.ship}. You have WON!`;
      }
      if (this.isSunk === true) {
        return `You sank my ${this.ship}`; //verify this is calling ship properly
      }
      // Change player logic
      return "Hit!";
    } else {
      //logic to mark DOM UI cell with 'miss'
      //DOM UI logic display Miss
      //change player logic
      return "Miss";
    }
  }
}

//need to create instances of player1.Gameboard player2/ai.gameboard

export const x = new Gameboard("player1");
// x.chooseShip("Destroyer", 0, 0, "vertical");
// x.chooseShip("Carrier", 1, 2, "horizontal");
