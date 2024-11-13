//Battleship TOP Project
//Gameboard logic
//gameboard.js

// import { GamePlay } from "./1players.js";
// import { Ship } from "./1ships.js";
// import { shipsData } from "./1ships.js";
// import { Players } from "./1players.js";

//Row is looked at before Column. Do I need to change all instances or column/row or just when going to the actual grid?

//$$ comments with //@ likely need tweaking for Players creation
//@ working on changePlayer and the related p1/2Board updates.
//@ const currentPlayer = getCurrentPlayer();
//@ const currentBoard = currentPlayer.playerBoard;

//^&^& IF Players is removed this will be needed
// const player1 = {
// name: prompt("Enter name for Player 1"),
// score: 0,
// };
// const player2 = {
//logic to determine if P2 is ai/player and call name if not ai.
// name: prompt("Enter name for Player 2"),
// score: 0,
// };
//^&^&

export class Gameboard {
  gridSize = 10;
  constructor(name) {
    this.player1Board = Array(this.gridSize)
      .fill(null)
      .map(() => Array(this.gridSize).fill(null));
    //figure out logic to display both boards with only the relevant data for each player

    this.player2Board = Array(this.gridSize)
      .fill(null)
      .map(() => Array(this.gridSize).fill(null));

    this.ships = []; //to track board pieces// seems to be redundant with this.board
    this.shipsList = new Set();
    this.numberOfShips = 0;
    this.missedShots = [];
    this.sunkShips = 0;
  }

  getPlayer1Board() {
    return this.player1Board;
  }
  getPlayer2Board() {
    return this.player2Board;
  }

  getShipsList() {
    return this.shipsList;
  }

  getNumberOfShips() {
    return this.numberOfShips;
  }

  getMissedShots() {
    //is this redundant if this.board tracks atacked?
    return this.missedShots;
  }

  getSunkShips() {
    return this.sunkShips;
  }

  //   //chooseShip to gamePlay: build logic to select column/row, orientation
  //   //remove args from chooseShip as they need to be declared
  // //   chooseShip(shipName, column, row, orientation) {
  //     chooseShip() {
  //         //logic for selecting shipName, col, row, orientation here.
  //     if (this.shipsList.has(shipName)) {
  //       throw new Error(`${shipName} has already been placed.`); //f I stay with throw new error: how do I implement a new choice?
  //       // let response = prompt("has already been placed, enter another ship");
  //       // return chooseShip(response, column, row, orientation);
  //     }
  //     //where is (ship) being declared from?
  //     const shipDetails = shipsData.find((ship) => ship.name === shipName);
  //     //console.log(shipName);
  //     //console.log('chooseShip', shipDetails);

  //     if (!shipsData) {
  //       throw new Error("Ship not found");
  //       // let response = prompt("Ship not found enter new ship:");
  //       // return chooseShip(response, column, row, orientation);
  //     }
  //         //passing shipInstance as an argument: How do I break apart the details in resulting call?
  //     const shipInstance = new Ship(
  //       shipDetails.name,
  //       shipDetails.size,
  //       orientation
  //     );
  //     //console.log('shipInstance', shipInstance);
  //     this.shipsList.add(shipName);
  //     //console.log('shipsList', this.shipsList);
  //     return this.processPlaceShip(shipInstance, column, row);
  //   }

  //   placeShip(ship, column, row) {
  processPlaceShip(ship, column, row) {
    let occupiedCells = [];

    if (ship.getIsVertical()) {
      //is inbounds?
      if (row + ship.size > this.gridSize || column < 0 || row < 0) {
        return false;
        //change return to prompt as below
        // let col = Number(prompt('invalid placement enter new column location;'));
        // let newRow = Number(prompt('invalid placement enter new row location;'));
        // return this.placeShip(ship, col, newRow);
      }
      //is occupied?
      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column, row + i)) return false;
        //change return to below
        // {let col = prompt(`Cell column:${column}, row:${row} is ocupied. enter a new column:`);
        // let row1 = prompt(`Cell column:${column}, row:${row + i} is ocupied. enter a new row:`); //make sure row +i doenst throw an error, shouldnt
        // return placeShip(ship, col, row1);
        // }

        //check if occupied
      }
      //place ship on board
      for (let i = 0; i < ship.size; i++) {
        // this.board[column][row + i] = {
        //modify for p1/p2
        //verify all cells are updated
        this.player1Board[column][row + i] = {
          ship: ship,
          attacked: false,
        };
        occupiedCells.push([column, row + i]);
        //remove occupiedCells as this.board manages it?
      }
    } else {
      if (column + ship.size > this.gridSize || column < 0 || row < 0) {
        return false;
        //change return to below
        // let col = Number(
        //   prompt("invalid placement enter new column location;")
        // );
        // let newRow = Number(
        //   prompt("invalid placement enter new row location;")
        // );
        // return this.placeShip(ship, col, newRow);
      }

      //is occupied?
      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column + i, row)) return false;
        //   change return to below
        //     {let col = prompt(`Cell column:${column}, row:${row} is ocupied. enter a new column:`);
        //     let row1 = prompt(`Cell column:${column + i}, row:${row} is ocupied. enter a new row:`); //make sure row +i doesnt throw an error, shouldnt
        //     return placeShip(ship, col, row1);
        //   }

        for (let i = 0; i < ship.size; i++) {
          this.player1Board[column + i][row] = {
            ship: ship,
            attacked: false,
          };
          occupiedCells.push([column + i, row]);
          //Probably will remove occupiedCells as this.board can manage this
        }
      }
      this.ships.push({ ship: ship, occupiedCells: occupiedCells });
      //this seems redundant when board gets updated with this
      this.numberOfShips++; //is this really needed?
      //logic to move to next step
      return true;
    }
  }

  isWithinBounds(column, row) {
    //does this return make the call work?
    return (
      column >= 0 && column < this.gridSize && row >= 0 && row < this.gridSize
    );
  }

  isCellAvailable(column, row) {
    //false return addressed by placeShip
    if (!this.isWithinBounds(column, row)) return false;

    //is occupied?
    //is this return correct for p2?
    return this.player1Board[column][row] === null;
  }

  //processAttack args from Gameplay.initiateAttack()
  //How to make sure proper Gameboard is used?
  //   makeAttack(column, row) {
  processAttack(column, row) {
    //Once DOM manages interface: block is unneeded
    if (this.isWithinBounds(column, row) === false) {
      throw new Error("Invalid shot, try again");
    }
    //modify this for p1/p2
    const cell = this.player1Board[column][row];

    if (cell.attacked) {
      //DOM wont react to attacked cells: bock can be removed then
      return "Already Attacked";
      // change return to throw new Error, adjust test as needed
      // replace with let result = prompt() and recall with result/args
    }
    cell.attacked = true;
    //does this properly check to see if cell is occupied by a ship?
    let result;
    if (cell.ship) {
        //logic moved to manageShotResult
    //   ship.increaseHitCount();
    //   if (Ship.getIsSunk() === true)
    //     if (this.sunkShips >= 5) {
    //       GamePlay.gameWon = true;
    //       return "You sank my ${this.ship}. You have WON!";
    //     }
    //   if (this.isSunk === true) {
    //     return "You sank my ${this.ship}";
    //   }
      result = "hit";
    } else {
      result = "miss";
    }
    return manageShotResult(result);
  }

  getCurrentPlayer() {
    //modify this for gamePlay this.turn
    return this.player1.getTurn() ? player1 : player2;
  }
}
