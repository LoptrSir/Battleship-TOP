//TOP Battleship Project
//handles game play mechanics
//gampeplay.js

import { Gameboard } from "./gameboard.js";
import { x } from './gameboard.js';

export class GamePlay {
  constructor() {}

  //  //Move chooseShip() here or leave in gameboard?

// placeShip() it makes more sense to leave in gameBoard as it manages all of the board states.

//does it make sense to have GamePlay initiate taking a shot? or does it over complicate things since Gameboard processes the bulk of the effect?
//   makeAttack(column, row) {
//   const result = x.gameBoard.takeShot(column, row);
// }

  //changePlayer

  //isGameWon

  //newGame

  //reset
}

//export const gamePlayInstance = new GamePlay();
