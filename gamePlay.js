//TOP Battleship Project
//handles game play mechanics
//gampeplay.js

import { Gameboard } from "./gameboard.js";
//import { x } from "./gameboard.js";

    //@ working on changePlayer and the related p1/2Board updates.
    //@ const currentPlayer = getCurrentPlayer();
    //@ const currentBoard = currentPlayer.playerBoard;
   

let player1 = "";
let player2 = "";

export class GamePlay {
  constructor(name) {
    this.name = name;
    //this.turn = this.whoGoesFirst();
    this.score = 0;
    this.turn = null; //boolean?
    this.playerBoard = new Gameboard();
  }

  getPlayerName() {
    return this.name;
  }

  getScore() {
    return this.score;
  }

  getTurn() {
    return this.turn;
  }

  setTurn(turnValue) {
    this.turn = turnValue; //verify this updates both player instances.
  }

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
    // x.makeAttack(column, row, gameboard); //make correct call of playersGameboard?

    //switch turn here or in the gameBoard?
  }

  //changePlayer() {
  //   this.turn = !this.turn;
  // }

  //isGameWon()

  //newGame()

  //reset()
}

function humanOrAi() {
  //will ultimately be managed by DOM UI, this becomes redundant at that point.

  const p2Type = prompt("Input: human OR ai");
  if (p2Type === "human" || p2Type === "ai") {
    return p2Type;
  } else {
    let response = prompt("invalid response, please input: human/ai");
    return humanOrAi(response);
  }
}

 //@ function getCurrentPlayer() {
//  return player1.getTurn() ? player1 : player2;
// }

//@ function switchTurn() {
//     if (player1.getTurn()) {
//         player1.setTurn(false);
//         player2.setTurn(true);
//     } else {
//         player1.setTurn(true);
//         player2.setTurn(false);
//     }
// }

export function initializeGame() {
  //this will likely require tweaking after DOM creation.

//   let p1PlayerName = prompt('What is your name?')
//   player1 = new GamePlay(p1PlayerName);
//   player1.setTurn = true;
//   let p2PlayerType = personOrAi();
//   player2 = new GamePlay(p2PlayerType);
//   player2.setTurn = false;

player1 = new GamePlay();
player1.setTurn = true;
player2 = new GamePlay();
player2.setTurn = false;

  //prompt Player1 to place ships
  //prompt Player2 to place ships


  player1.playerBoard.chooseShip("Destroyer", 0, 0, "vertical");
  player1.playerBoard.chooseShip("Carrier", 1, 2, "horizontal");
//   player2.playerBoard.chooseShip("Destroyer", 3, 3, "vertical");
//   player2.PlayerBoard.chooseShip("Carrier", 6, 2, "horizontal");
  console.log("initialize: P1", player1, "P2", player2);
}
