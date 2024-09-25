//Battleship TOP Project
//gameboard.js

import { Ship } from "./ships.js";
import { shipsData } from "./ships.js";

export class Gameboard {
  gridSize = 10;
  constructor(name) {
    //remove name from args?
    this.name = name; //player/ai name
    this.board = Array(this.gridSize)
      .fill(null)
      .map(() => Array(this.gridSize).fill(null));
    this.ships = []; //to track board pieces
    this.numberOfShips = 0;
    this.missedShots = [];
    this.sunkShips = 0;
  }

    //chooseShip() will eventually be DOM manipulated. use global calls in mean time to place ships.  Adjust function once modified for DOM as needed.
  chooseShip(shipName, column, row, orientation) {
    const shipsData = shipsData.find((ship) => ship.ship === shipName);

    if (!shipsData) {
      throw new Error("Ship not found");
    }

    const shipInstance = new Ship(shipsData.ship, shipsData.size, orientation);
    //does this retun cause problems with Jest?
    return this.placeShip(shipInstance, column, row);
  }

  // placeShip(ship, column, row, orientation) {
  placeShip(ship, column, row) {
    // ship.orientation = orientation;
    // ship.setOrientation(orientation);
    let occupiedCells = [];
    if (ship.getIsVertical()) {
      //check inbounds
      if (row + ship.size > this.gridSize || column < 0 || row < 0)
        return false;
      //check if occupied
      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column, row + i)) return false;
      }
      //place ship
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
    this.ships.push({ ship: ship, occupiedCells: occupiedCells });
    this.numberOfShips++;
    return true;
  }

  //^^^
  isWithinBounds(column, row) { //*
    return (
      column >= 0 && column < this.gridSize && row >= 0 && row < this.gridSize
    );
  }

  isCellAvailable(column, row) { //*
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

  getBoard() { //*
    return this.board;
  }

  getMissedShots() {
    return this.missedShots;
  }

  getSunkShips() { //*
    return this.sunkShips;
  }

  getName() { //*
    return this.name;
  }
}
//need to create instances of player1.Gameboard player2/ai.gameboard
