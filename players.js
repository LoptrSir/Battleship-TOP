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

  //$$ I think this might be better in GamePlay as this is a play management thing not a Player feature?
  setTurn(turnValue) {
    this.turn = turnValue; //verify this updates both player instances.
  }
  //$$ humanOrAi() reside inside Players class or outside? As a mechanic of helping initializeGame() determine if player2 is human/ai as that will impact future logic.
  humanOrAi() {
    //will ultimately be managed by DOM UI, this becomes redundant at that point.
    const p2Type = prompt("Input: human OR ai");
    if (p2Type === "human" || p2Type === "ai") {
      return p2Type;
    } else {
      let response = prompt("invalid response, please input: human/ai");
      return humanOrAi(response); 
    }
    return p2Type; 
  }


}
