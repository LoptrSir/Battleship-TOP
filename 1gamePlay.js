//TOP Battleship Project
//game play mechanics
//gamePlay.js

// import { Gameboard } from "./1gameboard.js";
// import { Players } from './1players.js';

//$$ does this remain with Players addition?
let player1 = "";
let player2 = "";

export class GamePlay {
  constructor(name) {
    //$$this.name = name; 
    //this.turn = player1; 
    //$$this.score = 0;
    this.playerBoard = new Gameboard(); //$$ move this to Players or change to declare each player in this constructor?
  }

//$ moved to Players
//   getPlayerName() {
//     return this.name;
//   }
//   getScore() {
//     return this.score;
//   }
//   getTurn() {
//     return this.turn;
//   }
//   setTurn(turnValue) {
//     this.turn = turnValue; //verify this updates both player instances.
//  }
//$ end move

//to be modified based on constructors location
  getPlayerBoard() {
    return this.playerBoard;
  }

  //@ figure out how this fits into DOM and generic logic
//   placePlayerShip(ship, column, row, orientation) {
//     currentBoard.placeShip(ship, column, row, orientation)
//   }

  initiateAttack() {
    //DOM will change this
     // const column = Number(prompt('Enter column:'));
    // const row = Number(prompt('Enter Row;'));
    // const gameboard = prompt('enter players gameboard:'); //how is this declared/relevant?
    //makeAttack(column, row)
 
    //switch turn here or in the gameBoard?
  }

  //$$ move to Players?
  //changePlayer() {
  //   this.turn = !this.turn;
  // }

  //isGameWon()

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
player1 = new Players(prompt('Enter Player 1 name'));
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



