//Battleship project for TOP
//Main code page
//battleship.js

//imports
import { myFooter } from "./domManipulation.js";

//Declarations

// export class Ship {
//   constructor(boat, size) {
//     this.boat = boat;
//     this.size = size;
//     this.hits = 0;
//     this.sunk = false;
//     //declare vertical/horizontal?
//   }
// }

export class Gameboard {
  constructor() {
    // this.grid = this.createGrid(11);
    this.piecesGrid = this.createGrid(11);
    this.attacksGrid = this.createGrid(11);
    //Should I use one or two boards per player? it seems most examples only use one.
    this.playerSunkShipCount = 0; 
    this.opponentSunkShipCount = 0;
    //include a missedShot array? or perhaps better a shot taken array? It seems cell available would do this instead.
  }
}

export class Player {
  constructor(name) {
    this.name = name; //change this to a function to solicit name.
    this.ships = [];
    this.score = 0;
  }
}

export function initializeGame() {}

initializeGame();
myFooter();
