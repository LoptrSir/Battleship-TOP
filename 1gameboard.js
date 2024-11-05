//Battleship TOP Project
//Gameboard logic
//gameboard.js

// import { GamePlay } from "./1players.js";
// import { Ship } from "./1ships.js";
// import { shipsData } from "./1ships.js";
// import { Players } from "./1players.js";

//$$ comments with //@ likely need tweaking for Players creation
//@ working on changePlayer and the related p1/2Board updates.
//@ const currentPlayer = getCurrentPlayer();
//@ const currentBoard = currentPlayer.playerBoard;

export class Gameboard {
    gridSize = 10;
    constructor(name) {
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
  
    //chooseShip() will eventually be DOM manipulated. 
    chooseShip(shipName, column, row, orientation) {
      if (this.shipsList.has(shipName)) {
        throw new Error(`${shipName} has already been placed.`);
        // let response = prompt("has already been placed, enter another ship");
        // return chooseShip(response, column, row, orientation);
      }
      const shipDetails = shipsData.find((ship) => ship.name === shipName);
      //console.log(shipName); //works
      //console.log('chooseShip', shipDetails); //works
  
      if (!shipsData) {
        throw new Error("Ship not found");
        // let response = prompt("Ship not found enter new ship:");
        // return chooseShip(response, column, row, orientation);
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
          if (!this.isCellAvailable(column, row + i)) return false; //change to below
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
        if (column + ship.size > this.gridSize || column < 0 || row < 0) {
          return false; //change to below
          // let col = Number(
          //   prompt("invalid placement enter new column location;")
          // );
          // let newRow = Number(
          //   prompt("invalid placement enter new row location;")
          // );
          // return this.placeShip(ship, col, newRow);
        }
  
        //check if occupied
        for (let i = 0; i < ship.size; i++) {
          if (!this.isCellAvailable(column + i, row)) return false; //change below
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
        //use prompt to get new col/row and recall makeAttack()
      }
      // const cell = this.board[column][row];
      const cell = this.player1Board[column][row];
      //@ const cell = this.currentBoard[column][row];
      if (cell.attacked) {
        return "Already Attacked"; //change to throw new Error, adjust test as needed
        //replace with let result = prompt() and recall with result/args
      }
      cell.attacked = true; //updates boolean to true
      if (cell.ship) {
        //logic to update shipHit/HitCount/isSunk/isGameWon
        //DOM UI logic to dispay Hit
        ship.increaseHitCount(); //need to call the instance.
        if (Ship.getIsSunk() === true) //change to y.isSunk
          if (this.sunkShips >= 5) {
            //DOM logic for playAgain/update games won counter(if used)
            return `You sank my ${this.ship}. You have WON!`;
            //explore changing return to true and let DOM handle the actual message
          }
        if (this.isSunk === true) { //need to call the instance
           //this.switchTurn(); //$$ correct instance
          return `You sank my ${this.ship}`; //ned to call instance of ship
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
  
    getCurrentPlayer() {
      //$$ are these the correct calls?
      //$$ is this.player1 valid instance?
      return this.player1.getTurn() ? player1 : player2;
    }
  }
