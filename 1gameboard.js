//Battleship TOP Project
//Gameboard logic
//gameboard.js

// import { GamePlay } from "./1gamePlay.js";
// import { Ship } from "./1ships.js";
// import { shipsData } from "./1ships.js";

//Row is looked at before Column. Do I need to change all instances or column/row or just when going to the actual grid?

//How do I manage updating the proper playerGameBoard?

 let currentPlayer = getTurn(); 
//let currentPlayer = instance.getTurn(); //need to declare an instance of GamePlay.
let currentBoard = gameBoardInstance.boards[currentPlayer];
let defenderBoard = getDefender(currentPlayer);
function getDefender(currentPlayer) {
    return currentPlayer === 'player1' ? 'player2' : 'player1';
}
//is there a more efficient manner to update each board?

let player1; //do these actually get used or modified? Or just declared for code flow?
let player2; //AI

export { player1, player2, currentPlayer, currentBoard, defenderBoard };

export class Gameboard {
  gridSize = 10; //Why isnt this declared?
   //*&*&*&  Reference initializeGame()
  constructor(gamePlayInstance) {
    this.gamePlay = gamePlayInstance; //*&this is to help tie in instance of a new game from initializeGame()
    //*&*&
    this.player1Board = this.makeArray();
    this.player2Board = this.makeArray();
    this.boards = {
        player1: this.player1Board,
        player2: this.player2Board
    };
    this.ships = []; //to track board pieces// seems to be redundant with this.board
    this.shipsList = new Set();
    this.numberOfShips = 0;
    this.missedShots = [];
    this.sunkShips = 0;
  }

  makeArray() {
    return Array(this.gridSize)
    .fill(null)
    .map(() => Array(this.gridSize).fill(null));
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
}  //END CLASS


