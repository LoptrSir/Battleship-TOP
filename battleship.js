//Battleship project for TOP
//Main code page
//battleship.js

//imports
import { myFooter } from "./domManipulation.js";

//Declarations

export class Ship {
  constructor(boat, size) {
    this.boat = boat;
    this.size = size;
    this.hits = 0;
    this.sunk = false;
  }
  isHit(x, y) {
    return true;
    //check coordinates for hit
    //if hit call hitWhichShip //consider a delay on the following hit logics to allow for announcement of hit to occur first.
    //announce hit, sunk or miss
    //call displayShot
  }
  hitWhichShip(x) {
    return "Destroyer";
    //determine which ship was hit
    //call isSunk
  }
  isSunk(x) {
    return true;
    //check hits to see if sunk
    //if sunk call sunkShipCounter,
  }
}

export class Gameboard {
  constructor() {
    this.piecesGrid = this.createGrid(11);
    this.attacksGrid = this.createGrid(11);
    this.playerSunkShipCount = 0;
    this.opponentSunkShipCount = 0;
  }
  createGrid(size) {
    this.grid = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(i);
      }
      this.grid.push(row);
    }
    return this.grid;
  }

  placePiece() {
    //each player places their ships on piecesBoard
    //call relevant player.piecesGrid assign coordinates as occupied.
  }

  playerTurn() {
    //is this redundant with changePlayer()?
  }

  isValidMove(x, y) {
    //check for in bounds and not previously called
    //if not valid display message to correct shot and try again
    //call isHit()
  }

  isHit(x, y) {
    //check for hit/miss
    //if isHit === true update Ship.hits, if hits === sunk update Ship.sunk and totalSHipsSunk if sunk === true  call isGameWon() if hit/sunk/sunk and won. 
    //announce hit/sunk x.boat/sunk x.boat and won
    //displayShot(true/false);
  }

  displayShot(x) {
    //update both players boards with proper color marker 
      //call DOM manipulation function/update DOM.js for miss/hit/sunk
      // changePlayer
  }
  totalShipsSunk() {
    return this.opponentSunkShipCount;
    //update attackers sunkShipCounter
  }
  isGameWon() {
    //check shipSunkCounter
    //if won call announceWin
  }
  announceWin() {
    //announce name.boat is sunk and game is won
    //update score()
    //call playAgain(x)
  }
  changePlayer() {
    //blank screen with take my turn button
    //update DOM to notify players to change control of screen
    //possible dual screen play option?
  }

  score() {
    //update winning player Gameboard.score.
  }
  newGame() {
    //clear all boards
    //reset all ships 
    //call placeShips()
  }

  reset() {
    //call newGame()
    //reset score to zero
  }
}

export class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.score = 0;
  }
}

//by using this function Jest is happy.  Focus on removing independent declarations/functions in the general code.
export function initializeGame() {
  const player1Boards = new Gameboard();
  const player2Boards = new Gameboard();
  const player1 = new Player("Gertrude"); //How do I make this call is player 1 a person or computer and assign name there?
  const player2 = new Player("Ferdinand");

  const pieces = [
    { boat: "carrier", hits: 5 },
    { boat: "battleship", hits: 4 },
    { boat: "cruiser", hits: 3 },
    { boat: "submarine", hits: 3 },
    { boat: "destroyer", hits: 2 },
  ];

  pieces.forEach((piece) => {
    const ship = new Ship(piece.boat, piece.hits);
    player1.ships.push(ship);
    player2.ships.push(ship);
  });
  console.log("IG GM1", player1Boards);
  console.log("IG P1", player1);

  return { player1Boards, player2Boards, player1, player2 };
}

function selectPlayer() {
  //if human solicit name otherwise default to computer and update this.name
}

initializeGame();
myFooter();
