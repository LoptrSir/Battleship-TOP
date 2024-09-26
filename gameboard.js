//Battleship TOP Project
//gameboard.js

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
    return this.missedShots;
  }

  getSunkShips() {
    //*Jest works
    return this.sunkShips;
  }

  //chooseShip() will eventually be DOM manipulated. use global calls in mean time to place ships.  Adjust function once modified for DOM as needed.
  chooseShip(shipName, column, row, orientation) {
    if (this.shipsList.has(shipName)) {
      // return false; //use a specific error message instead?
      throw new Error(`${shipName} has already been placed.`);
    }
    // const shipsData = shipsData.find((ship) => ship.ship === shipName);
    const shipDetails = shipsData.find((ship) => ship.name === shipName);
    //console.log(shipName); //works
    //console.log('chooseShip', shipDetails); //works

    if (!shipsData) {
      throw new Error("Ship not found"); //does this make Jest grumpy, if so what about using alert instead? A: NO using an alert requires mocking the alert in Jest.
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
  }

  // placeShip(ship, column, row, orientation) {
  placeShip(ship, column, row) {
    //*Jest works
    let occupiedCells = [];
    if (ship.getIsVertical()) {
      //check if inbounds
      if (row + ship.size > this.gridSize || column < 0 || row < 0)
        return false;
      //check if occupied
      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column, row + i)) return false;
      }
      //place ship on board
      for (let i = 0; i < ship.size; i++) {
        this.board[column][row + i] = ship;
        occupiedCells.push([column, row + i]);
      }
    } else {
      if (column + ship.size > this.gridSize || column < 0 || row < 0)
        return false;

      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column + i, row)) return false;
      }

      for (let i = 0; i < ship.size; i++) {
        this.board[column + i][row] = ship;
        occupiedCells.push([column + i, row]);
      }
    }
    this.ships.push({ ship: ship, occupiedCells: occupiedCells }); //this seems redundant when board gets updated with this
    this.numberOfShips++; //is this really needed?
    console.log("placeShip", this.board);
    return true;
  }

  isWithinBounds(column, row) {
    //*Jest works
    return (
      column >= 0 && column < this.gridSize && row >= 0 && row < this.gridSize
    );
  }

  isCellAvailable(column, row) {
    //*Jest works
    if (!this.isWithinBounds(column, row)) return false;
    return this.board[column][row] === null; // Check if cell is available
  }

  // receiveAttack(column, row) {
  //   const target = board[column][row];
  //   //logic for valid shot needed. or turn off eventListeners for occupied cells?
  //   if (target === null) {
  //     //make sure cell has null value if not occupied by shit or miss.
  //     this.missedShots.push([column][row]); //track missedShots
  //     board[column][row] = "miss";
  //      //is updating missedShots and board redundant?
  //     return "miss"; or return true/false?
  //   } else {
  //      //verify if hit a valid target
  //     //dose using typeof instead of else make sense?  else is assuming miss or hit as only options.
  //     target.increaseHitCount();
  //     board[column][row] = "hit";
  //     return "hit";
  //   }
  //   //logic for determine isSunk/GameWon?
  // }
}
//need to create instances of player1.Gameboard player2/ai.gameboard

// let x = new Gameboard("player1");
// x.chooseShip("Destroyer", 0, 0, "vertical");
// x.chooseShip("Carrier", 1, 2, "horizontal");
