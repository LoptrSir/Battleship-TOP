//Battleship project for TOP
//Main code page
//battleship.js

//imports
import { myFooter } from "./dom.js";

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
    // this.grid = this.createGrid(11);
    this.piecesGrid = this.createGrid(11);
    this.attacksGrid = this.createGrid(11);
    // this.piecesGrid = this.cloneGrid();
    // this.attacksGrid = this.cloneGrid();
    this.playerSunkShipCount = 0;
    this.opponentSunkShipCount = 0;
  }
  //   createGrid(size) {
  //     // this.grid = [];
  //     const grid = [];
  //     for (let i = 0; i < size; i++) {
  //       let row = [];
  //       for (let j = 0; j < size; j++) {
  //         // row.push({row: i, col: j});
  //         row.push({row: i, col: j, value: null, available: true});
  //       }
  //     //   this.grid.push(row);
  //     grid.push(row);
  //     }
  //     // return this.grid;
  //     return grid;
  //   }

  createGrid(size) {
    const grid = [];
    let currentLetter = "A";

    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        if (i == 0) {
          if (j == 0) {
            row[j] = { row: i, col: j, value: null, available: false };
          } else {
            row[j] = { row: i, col: j, value: currentLetter, available: false };
            currentLetter = String.fromCharCode(
              currentLetter.charCodeAt(0) + 1
            );
          }
        } else if (j == 0) {
          row[j] = { row: i, col: j, value: i, available: false };
        } else {
          row[j] = { row: i, col: j, value: null, available: true };
        }
      }
      grid.push(row);
    }
    return grid;
  }

  //   cloneGrid() {
  //     return this.grid.map(row =>
  //         row.map(cell => ({
  //             ...cell,
  //             value: null,
  //             available: true
  //         }))
  //     );
  //   }

  placePieces(player) {
    //let availablePieces = player.ships.slice(); //create shallow copy. remove ships from this as they are placed.
    //const piece = {} ;
    //const cell counter = 0;


    //const currentPlayer = player1 ? player1.piecesBoard : player2.piecesBoard;
    //        OR
    //let currentPlayer = player1;

    //chooseCell(currentPlayer)

    //does the piece match the correct number of spaces for that piece? test if pairs = size

    //let currentPlayer = player1.piecesBoard;
    // player1.piecesGrid.forEach(ship) ships => {
    //     ship.size onto grid occupying proper spaces

    // }
    //each player places ships on their piecesBoard
    //as each piece is placed remove it from avail to place
    //call relevant player.piecesGrid assign coordinates as occupied.
  }

  playerTurn() {
    //is this redundant with changePlayer()?
  }

  selectPiece(player) {
    //copy player.ships
    //select ship from copy?, validate it has not been selected, remove ship from player.ships once selected.
    //chooseCell(player, name, size)
  }
  chooseCell(player, row, col, name) {
    // DOM action that calls chooseCell() when cell is clicked on. 

    //const cell = { row, col };

    //DOM action that verifies size against pieces count. If less than asks for more, if correct size moves to next piece. this may be better in assignCell() and deal with size there.

    //if (!isValidMove(player, cell, false)) {
    //   false triggers message
    //   }
    // else assignCell(player, cell)
   
    

    //add cell to piece as object
    //return piece
  }

  assignCell(player, cell) {
 
  }

  isValidMove(player, cell, validate) {
    //check for in bounds and available cell
 
    //if (isInBounds(player, cell)) {
    //    if (isAvailable()) {
    //        if (validate = true) {
    //           const contraPlayer = player1 ? player2.piecesGrid : player1piecesGrid;
    //           isHit(contraPlayer, cell)
    //        }else return true; 
    //     }else return msg space not available       
    //}else return msg selection is not in grid area
  }

  isInBounds(cell) {
    // const [row, col] = cell;
    const { row, col } = cell;
      if (!(row > 0 && row < 11 && col > 0 && col < 11)) {
        return false;
      }
    return true;
  }

  isAvailable(player, cell) {
    //const { row, col } = cell; //is this line needed?

    //if (player.piecesBoard[cell].available === true) {
    //  return true
    //}else return false;
  }

  isHit(contraPlayer, cell) {
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

  score() {
    //update winning player Gameboard.score.
  }
  newGame() {
    //clear all boards
    //this.piecesGrid = this.createGrid(11);
    //this.attacksGrid = this.createGrid(11);
    //reset all ships, since its inside a different class does it require calling Ship first?
    //this.size = size;
    //this.hits = 0;
    //this.sunk = false;
    //call placeShips()
  }

  reset() {
    //call newGame()
    //reset: score to zero, player names to null, number of games to 0
  }

  changePlayer() {
    //blank screen with take my turn button
    //update DOM to notify players to change control of screen
    //possible dual screen play option?
  }
}

export class Player {
  constructor(name) {
    this.name = name; //change this to a function to solicit name.
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
