//TOP Battleship Project
//game play mechanics
//1gamePlay.js

// import { minSatisfying } from "semver"; //checks if version satisfies version range returning the minimum satisfactory version.

import { Gameboard } from "./1gameboard.js";
import { player1, player2, player1Board, player2Board } from "./1gameboard.js";
import { gameStateInstance } from ".1gameState.js";

// //%Might not use below as gobal declaration not most efficient method.
// //const newGame = new GamePlay(); //create instance and this is out of place
//const newGame;
// export { newGame }; //update imports to include this
// //%

export class GamePlay {
  constructor() {
    this.turn = null; //does test still work?
    this.gameWon = false; //useful for preventing further actions, trigger DOM actions, trigger new game routine
  }
//@#$ BEGIN replace all calls of getX() with a direct call of the constructor target.
//   getTurn() {
//     return this.turn;
//   }

  getGameWon() {
    return this.gameWon;
  }
//@#$ END
  processGameWon() {
    if (this.gameWon === true) {
      //announce winner logic/function call
      //play again prompt that triggers reset of all or calls initiatgeGame()
    }
  }


  //*(*(*( placeShip: Does creating instance here cause a problem if placement fails as instance will exist but not be placed?
    //*(How does this logic update proper player board?
  //
  // placeShip() {
  // const shipName = prompt('select a ship').toLowerCase().trim();
    // lconst column = Number(prompt('Enter column:'));
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
  // break; //does this break skip to the next bit of code in this function outside this specific block? I assume yes
  // } else {
  //         alert('Invalid input, Please enter "vertical" or "horizontal"');
  // }
  //     if (this.shipsList.has(shipName)) {
  //       throw new Error(`${shipName} has already been placed.`); //f I stay with throw new error: how do I implement a new choice?
  //       // let response = prompt("has already been placed, enter another ship");
  //       // return chooseShip(response, column, row, orientation);
  //     }
  //     //below where is (ship) being declared from?
  //     const shipDetails = shipsData.find((ship) => ship.name === shipName);
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
  //     this.shipsList.add(shipName);
  //   //update this.ships with shipInstance? OR is this done in processPlaceShip()?
  //  //Use the below return or simply make a call for this.processPlaceShip?
  //     return this.processPlaceShip(shipInstance, column, row);

  //logic to check if all ships are placed, call placeShip if not and pass back to initializeGame to prompt P2 placeShip if true.
  //   } //END placeShip()



// takeTurn() {
//update this.turn in manageShotResult? 
//if (this.gameWon() === true) //{return gameWon/Over()
//} else {prompt currentPlayer/this.turn to initiateAttack()} 
//What about accessing gameBoard? managed by getCurrentBoard()?
//}



  //initiateAttack() {
    //announce currentPlayer/this.turn take your turn. Or just modify prompts for col/row?
    //How to determine correct Gameboard to attack?
    //accepts attack coordinates then calls gameBoardInstance.processAttack()
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



 //   //worked on in sandbox.js
 // //Needs more work
//   manageShotResult(result, cell) {
//     if(result === 'miss') {
//         alert(Miss);
//         advanceTurn;
//     } else if( result === 'hit') {
//         ship.increaseHitCount(); 
//         //logic to determine if hitCount >= sunk and updating isSunk()
//         if (ship.hitCounter >= ship.size) {
//             ship.isSunk = true;
//             //need to modify for correct gameboard instance
//             gameBoardInstance.sunkShips++;
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
    // // this.turn = this.turn === 'player1' ? 'player2' : 'player1'; //if using takeTurn
    //advanceTurn()/takeTurn() 
  //}  //END manageShotResult()



//   advanceTurn(turnValue) {
//     //using this.turn with a ternary operator?
// this.turn = this.turn === 'player1' ? 'player2' : 'player1';
// validate turn updated?

// call initiateAttack()
//}



  //isGameWon() {
  //LOGIC: call gameWon() = true; trigger announcement, ask if playing a newGame? if yes call newGame()
  //}



  //newGame() //reset this.turn, this.hitCounter, this.sunk, this.gameWon, this.ships, this.player1/2Board, this.shipsList, this.numberOfShips, this.missedShots, this.sunkShips. OR do we just call a new instance of each class?


} //END Class 


//*&*&BEGIN migrate this inside GamePlay class?? Seems it is better here.
export function initializeGame() {
//*&*&*& new logic
gameStateInstance.player1Board.initializeBoards();
gameStateInstance.player2Board.initializeBoards();
gameStateInstance.gamePlay.turn = player1;
//prompt P1 placeShip as below
//gameStateInstance.gamePlay.placeShip();
//Once P1 has placed all ships update below gameStateInstance.gamePlay.turn = player2; 
//prompt P2 to placeShip(); //How to modify this since AI wont need to be prompted.
//update turn to P1 as below
//gameStateInstance.gamePlay.turn = player1;
//prompt Player1 this.takeTurn()

//*&*&*& END new logic





  // //$%$% BEGIN for testing purposes
  player1.playerBoard.chooseShip("Destroyer", 0, 0, "vertical");
  player1.playerBoard.chooseShip("Carrier", 1, 2, "horizontal");
  //   player2.playerBoard.chooseShip("Destroyer", 3, 3, "vertical");
  //   player2.PlayerBoard.chooseShip("Carrier", 6, 2, "horizontal");
  console.log("initialize: P1", player1, "P2", player2);
  //  //$%$% END
}
