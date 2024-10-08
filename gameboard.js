//Battleship TOP Project
//gameboard.js

import { GamePlay } from "./gamePlay.js";
import { Ship } from "./ships.js";
import { shipsData } from "./ships.js";

    //@ working on changePlayer and the related p1/2Board updates.
    //@ const currentPlayer = getCurrentPlayer();
    //@ const currentBoard = currentPlayer.playerBoard;

export class Gameboard {
  gridSize = 10;
  constructor(name) {
    this.name = name; //player/ai name
    // this.board = Array(this.gridSize)
    //   .fill(null)
    //   .map(() => Array(this.gridSize).fill(null));

    //^^^^^change from board to player1/2Board introduces a bunch of bugs that need to ba addressed
      this.player1Board = Array(this.gridSize)
      .fill(null)
      .map(() => Array(this.gridSize).fill(null));

      this.player2Board = Array(this.gridSize)
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
  // getBoard() {
  //   //*Jest works
  //   return this.board;
  // }

  getPlayer1Board() {
    //*Jest works
    return this.player1Board;
  }
  getPlayer2Board() {
    //*Jest works
    return this.player2Board;
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
      // throw new Error(`${shipName} has already been placed.`);
      let response = prompt('has already been placed, enter another ship')
      return chooseShip(response, column, row, orientation)
    }
    const shipDetails = shipsData.find((ship) => ship.name === shipName);
    //console.log(shipName); //works
    //console.log('chooseShip', shipDetails); //works

    if (!shipsData) {
      //throw new Error("Ship not found");
      let response = prompt('Ship not found enter new ship:');
      return chooseShip(response, column, row, orientation)
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

  placeShip(ship, column, row) {
    //*Jest works
    let occupiedCells = [];

    if (ship.getIsVertical()) {
      //check if inbounds
      if (row + ship.size > this.gridSize || column < 0 || row < 0) {
        return false; //change to prompt as below
        // let col = Number(prompt('invalid placement enter new column location;'));
        // let newRow = Number(prompt('invalid placement enter new row location;'));
        // return this.placeShip(ship, col, newRow);
      }
      //check if occupied
      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column, row + i)) 
        return false; //change to below
        // {let col = prompt(`Cell column:${column}, row:${row} is ocupied. enter a new column:`);
        // let row1 = prompt(`Cell column:${column}, row:${row + i} is ocupied. enter a new row:`); //make sure row +i doenst throw an error, shouldnt
        // return placeShip(ship, col, row1);
        // }

        //check if occupied
      }
      //place ship on board
      for (let i = 0; i < ship.size; i++) {
        // this.board[column][row + i] = {
          this.player1Board[column][row + i] = {
            //@ currentBoard[column][row + i] = {
          ship: ship,
          attacked: false,
        };
        occupiedCells.push([column, row + i]);
        //Probably will remove occupiedCells as this.board seems to manage it
      }
    } else {
      if (column + ship.size > this.gridSize || column < 0 || row < 0)
        //return false; //change to below
      {
        let col = Number(prompt('invalid placement enter new column location;'));
        let newRow = Number(prompt('invalid placement enter new row location;'));
        return this.placeShip(ship, col, newRow);
      }

      //check if occupied
      for (let i = 0; i < ship.size; i++) {
        if (!this.isCellAvailable(column + i, row))
           return false; //change below
      //   {let col = prompt(`Cell column:${column}, row:${row} is ocupied. enter a new column:`);
      //   let row1 = prompt(`Cell column:${column + i}, row:${row} is ocupied. enter a new row:`); //make sure row +i doesnt throw an error, shouldnt
      //   return placeShip(ship, col, row1);
      // }

      for (let i = 0; i < ship.size; i++) {
        // this.board[column + i][row] = {
          this.player1Board[column + i][row] = {
        //@ currentBoard[column + i][row] = {
          ship: ship,
          attacked: false,
        };
        occupiedCells.push([column + i, row]);
        //Probably will remove occupiedCells as this.board can manage this
      }
    }
    this.ships.push({ ship: ship, occupiedCells: occupiedCells }); //this seems redundant when board gets updated with this
    this.numberOfShips++; //is this really needed?
    // console.log("placeShip", this.board);
    console.log("placeShip", this.player1Board);
    //@ console.log("placeShip", currentBoard);
    return true; //logic to move to next step?
  }
  }

  isWithinBounds(column, row) {
    //*Jest works
    return (
      column >= 0 && column < this.gridSize && row >= 0 && row < this.gridSize
    );
  }

  isCellAvailable(column, row) {
    //*Jest works
    //any false returns addressed in placeShip
    if (!this.isWithinBounds(column, row)) return false;

    //check if occupied
    // return this.board[column][row] === null;
    return this.player1Board[column][row] === null;
    //@ return this.currentBoard[column][row] === null;
  }

  //Need to incorporate calls to update DOM as appropriate
  makeAttack(column, row) {
    if (this.isWithinBounds(column, row) === false) {
      throw new Error("Invalid shot, try again");
      //with DOM UI control this becomes unneeded
      //try/catch block to resolve error and reset makeAttack
    }
    // const cell = this.board[column][row];
    const cell = this.player1Board[column][row];
    //@ const cell = this.currentBoard[column][row];
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
      //x.hitCounter++; //proper way to increase count?
      ship.increaseHitCount();
      if (ship.getIsSunk() === true) 
      // if (x.hitCounter >= x.size) {
      //   x.isSunk = true;
      //   this.sunkShip++; //proper way to increase count?
      //}
      if (this.sunkShips >= 5) {
        //DOM logic for playAgain/update games won counter(if used)
        return `You sank my ${this.ship}. You have WON!`;
        //explore changing return to true and let DOM handle the actual message
      }
      if (this.isSunk === true) {
        return `You sank my ${this.ship}`; //verify this is calling ship properly
         //explore changing return to true and let DOM handle the actual message
      }
      //this.switchTurn();
      return "Hit!";
       //explore changing return to true and let DOM handle the actual message
    } else {
      //logic to mark DOM UI cell with 'miss'
      //DOM UI logic display Miss
      //this.switchTurn();
      return "Miss";
       //explore changing return to true and let DOM handle the actual message
    }
  }
}

//need to create instances of player1.Gameboard player2/ai.gameboard

//export const x = new Gameboard("player1");
// x.chooseShip("Destroyer", 0, 0, "vertical");
// x.chooseShip("Carrier", 1, 2, "horizontal");
