//TOP Battleship project
//players.js

import { Gameboard } from './gameboard.js';
import { GamePlay } from './gamePlay.js';

export class Players {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.turn = null;
    //this.actions //what actions?
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

  //move setTurn to gamePlay.js
  setTurn(turnValue) {
    this.turn = turnValue; //verify this updates both player instances.
  }
  //move humanOrAi() to gamePlay?
  humanOrAi() {
    //prompts to interface with DOM.
    const p2Type = prompt("Input: human OR ai");
    if (p2Type === "human" || p2Type === "ai") {
      return p2Type;
    } else {
      let response = prompt("invalid response, please input: human/ai");
      return humanOrAi(response); 
    }
    //return p2Type; 
  }


}
