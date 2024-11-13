//TOP Battleship Project
//game play mechanics
//1gamePlay.js

import { minSatisfying } from "semver";

// import { Gameboard } from "./1gameboard.js";


export class GamePlay {
  //   constructor(name) {
  constructor() {
    this.turn = player1;
    //this.gameWon = false; //useful for preventing further actions, trigger DOM actions, trigger new game routine

    //this.playerBoard = new Gameboard(); //to be removed. handled by Gameboard.
  }

  getTurn() {
    return this.turn;
  }

  getGameWon() {
    return this.gameWon;
  }

  //working on in sandbox.js
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
    //advanceTurn();
  //}

//   advanceTurn(turnValue) {
//     // instead of passing an argument, what about using getTurn() with a ternary operator?
//     this.turn = turnValue; //verify this updates both player instances.
//   }

  processGameWon() {
    if (this.gameWon === true) {
      //announce winner
      //provide play again option that triggers reset of all but players names.
    }
  }

  //$^$^DO NOT USE SCORE over complicates things
  //   getScore() {
  //     return {
  //         p1Score: this.p1Score,
  //         p2Score: this.p2Score
  //     };
  //   }

  //   //to be moved to Gameboard. modify to call both players?
  //   getPlayerBoard() {
  //     return this.playerBoard;
  //   }

  //*(*(*( place/chooseShip defines shipName, column, row and orientation.  Does creating instance here cause a problem if placement fails as instance will exist but not be placed?
  //Gameboard.processPlaceShip() manages physical placement.
  //How does this logic update proper player board?
  //   placePlayerShip() {
  // let ship = prompt('select a ship');
  // let column = Number(prompt('input column number'));
  //  let row = Number(prompt('input row number'));
  //let orientation = prompt('input "vertical" OR " horizontal"').toLowerCase().trim();
  //if (orientation === 'vertical' || orientation === 'horizontal') {
  // break;
  // } else {
  //         alert('Invalid input, Please enter "vertical" or "horizontal"');
  // }
  //     Gameboard.processPlaceShip(ship, column, row, orientation)
  //   }

  //chooseShip to gamePlay: build logic to select column/row, orientation
  //remove args from chooseShip as they need to be declared
  //   chooseShip(shipName, column, row, orientation) {
  // // // //
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
  //*(*(

  initiateAttack() {
    //How to determine correct Gameboard to attack?
    //accepts attack coordinates then calls Gameboard.processAttack()
    // const column = Number(prompt('Enter column:'));
    // const row = Number(prompt('Enter Row;'));
    //processAttack(column, row)
    //switch turn here or in the gameBoard?
  }

  //changePlayer() {
  ////logic to advance player turn
  // }

  //isGameWon() //redundant when makeAttack checks for a win.

  //newGame()

  //reset()

  //   //^^^^moved from players.js
  // setTurn(turnValue) {
  //     this.turn = turnValue; //verify this updates both player instances.
  // }

  // humanOrAi() {
  //     //prompts to interface with DOM.
  //     const p2Type = prompt("Input: human OR ai");
  //     if (p2Type === "human" || p2Type === "ai") {
  //       return p2Type;
  //     } else {
  //       let response = prompt("invalid response, please input: human/ai");
  //       return humanOrAi(response);
  //     }
  //     //return p2Type;
  // }
  // //^^^^ end moved
} //Class closure

//$$ with addition of Players. Does this or its initial declaration move there?
//@ function getCurrentPlayer() {
//  return player1.getTurn() ? player1 : player2;
// }

export function initializeGame() {
  //this will likely require tweaking after DOM creation.

  ///**possible considerations for individual names
  //   let p1PlayerName = prompt('What is your name?')
  //   player1 = new GamePlay(p1PlayerName);
  //   player1.setTurn = true;
  //   let p2PlayerType = personOrAi();
  //   player2 = new GamePlay(p2PlayerType);
  //   player2.setTurn = false;

  //$$ best location for Player1/2 declaration? currently at top of gamePlay.js
  // player1 = new GamePlay();
  player1 = new Players(prompt("Enter Player 1 name"));
  player1.setTurn = true;
  // player2 = new GamePlay();
  player2Type = humanOrAi(); //How to take this result and ask for P2 name if not ai?
  player2 = new Players();
  player2.setTurn = false;

  //prompt Player1 to place ships
  //prompt Player2 to place ships

  //$$ update instances? Instance seems valid, but playerBoard probably needs to be tweaked. Current code throws TypeError: cannot read properties of undefined 'chooseShip
  player1.playerBoard.chooseShip("Destroyer", 0, 0, "vertical");
  player1.playerBoard.chooseShip("Carrier", 1, 2, "horizontal");
  //   player2.playerBoard.chooseShip("Destroyer", 3, 3, "vertical");
  //   player2.PlayerBoard.chooseShip("Carrier", 6, 2, "horizontal");
  console.log("initialize: P1", player1, "P2", player2);
}
