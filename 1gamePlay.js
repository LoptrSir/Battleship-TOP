//TOP Battleship Project
//game play mechanics
//1gamePlay.js

// import { minSatisfying } from "semver"; //checks if version satisfies version range returning the minimum satisfactory version.

// import { Gameboard } from "./1gameboard.js";
//import { player1, player2, currentPlayer, currentBoard } from "./1gameboard.js";


export class GamePlay {
  constructor() {
    this.turn = player1; //declare player1 or null?
    this.gameWon = false; //useful for preventing further actions, trigger DOM actions, trigger new game routine
  }

  getTurn() {
    return this.turn;
  }

  getGameWon() {
    return this.gameWon;
  }

  processGameWon() {
    if (this.gameWon === true) {
      //announce winner
      //provide play again option that triggers reset of all but players names.
    }
  }


  //*(*(*( placeShip: Does creating instance here cause a problem if placement fails as instance will exist but not be placed?
    //*(How does this logic update proper player board?
  //
  // placeShip() {
  // let shipName = prompt('select a ship').toLowerCase().trim();
    // const column = Number(prompt('Enter column:'));
    // //calling gridSize: I either need to declare an instance of Gameboard (likely in initializeGame, OR I need to make gridSize static in Gameboard IE: static gridSize = 10; )
    // while (isNaN(column) || column < 0 || column >= gridSize) {
    // column = Number(prompt('Invalid input. Please enter a valid column:'));
    // }
    // const row = Number(prompt('Enter Row;'));
    //     while (isNaN(row) || row < 0 || row >= gridSize) {
    // row = Number(prompt('Invalid input. Please enter a valid row:'));
    // }
  //let orientation = prompt('input "vertical" OR " horizontal"').toLowerCase().trim();
  //if (orientation === 'vertical' || orientation === 'horizontal') {
  // break;
  // } else {
  //         alert('Invalid input, Please enter "vertical" or "horizontal"');
  // }
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
  //     if (this.shipsList.has(shipName)) {
  //       throw new Error(`${shipName} has already been placed.`); //with throw new error: how to implement a new choice?
  //       // let response = prompt("has already been placed, enter another ship");
   //     }
  //     //where is (ship) being declared from? GameBoard this.ships?, modify call?
  //     const shipDetails = shipsData.find((ship) => ship.name === shipName);
  //     //console.log(shipName);
  //     //console.log('chooseShip', shipDetails);

  //     if (!shipsData) { //is this syntax valid? How is it testing for shipName?
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
  //    update Gameboard.ships with shipInstance? OR is this done in processPlaceShip()?
  //     //console.log('shipInstance', shipInstance);
  //     this.shipsList.add(shipName);
  //     //console.log('shipsList', this.shipsList);
  //     this.processPlaceShip(shipInstance, column, row); 
  //   } //END placeShip()

// takeTurn() {
//Logic: check is this.gameWon(call gameOver/Won if true), update this.turn: here or in manageShotResult?, prompt next player to initiateAttack, What about accessing gameBoard? managed by currentBoard?
  //@ currentPlayer getTurn()
//}

  //initiateAttack() {
    //How to determine correct Gameboard to attack?
    //accepts attack coordinates then calls Gameboard.processAttack()
    // const column = Number(prompt('Enter column:'));
//     while (isNaN(column) || column < 0 || column >= gridSize) {
//   column = Number(prompt('Invalid input. Please enter a valid column:'));
// }
    // const row = Number(prompt('Enter Row;'));
    //     while (isNaN(row) || row < 0 || row >= gridSize) {
//   row = Number(prompt('Invalid input. Please enter a valid row:'));
// }
    //processAttack(column, row)
    //switch turn here or in the gameBoard?
  //}

    //worked on in sandbox.js
//   manageShotResult(result, cell) {
//     if(result === 'miss') {
//         alert(Miss);
//         advanceTurn;
//     } else if( result === 'hit') {
//         ship.increaseHitCount(); 
//         //logic to determine if hitCount >= sunk and updaing isSunk()
//         if (ship.hitCounter >= ship.size) {
//             ship.isSunk = true;
//             //need to modify for correct gameboard
//             Gameboard.sunkShips++;
//         }
//         if (ship.getIsSunk() === true)
//             //logic to increase sunkShips count
//           if (this.sunkShips >= 5) {
//                 GamePlay.gameWon = true;
//                 return `You sank my ${this.ship}. You have WON!`;
//           }
//         if (this.isSunk === true) {
//            return `You sank my ${this.ship}`; 
//         }

    //}
    // // this.turn = getTurn() === 'player1' ? 'player2' : 'player1'; //if using takeTurn
    //advanceTurn()/takeTurn() 
  //}  //END manageShotResult()

//   advanceTurn(turnValue) {
//     //using getTurn() with a ternary operator?
// this.turn = getTurn() === 'player1' ? 'player2' : 'player1';
//}

  //isGameWon() {
  //LOGIC: call gameWon() = true; trigger announcement, ask if playing a newGame? if yes call newGame()
  //}

  //newGame() //reset this.turn, this.hitCounter, this.sunk, this.gameWon, this.ships, this.player1/2Board, this.shipsList, this.numberOfShips, this.missedShots, this.sunkShips. OR do we just call a new instance of each class?


} //Class closure



export function initializeGame() {

  //   player1 = new GamePlay();
  //   player1.setTurn = true; //use this or use this.turn = player1?
  //   player2 = new GamePlay();
  //   player2.setTurn = false; //remove if using this.turn = player1

  //prompt Player1 to place ships
  //prompt Player2 to place ships

  player1.playerBoard.chooseShip("Destroyer", 0, 0, "vertical");
  player1.playerBoard.chooseShip("Carrier", 1, 2, "horizontal");
  //   player2.playerBoard.chooseShip("Destroyer", 3, 3, "vertical");
  //   player2.PlayerBoard.chooseShip("Carrier", 6, 2, "horizontal");
  console.log("initialize: P1", player1, "P2", player2);
}
