//TOP Battleship project
//Player management logic
//1players.js

// import { Gameboard } from './1gameboard.js';
// import { GamePlay } from './1gamePlay.js';

export class Players {
    constructor(name) {
      this.name = name;
      this.score = 0;
      //this.isAI = false; //consider using this to determine if AI is in play
      //this.turn = null; //Moved to GamePlay
      //this.actions //what actions?
    }
  
    getPlayerName() {
      return this.name;
    }
  
    getScore() {
      return this.score;
    }

// //moved to GamePlay
//     getTurn() {
//       return this.turn;
//     }
  
    // //move setTurn to gamePlay.js
    // setTurn(turnValue) {
    //   this.turn = turnValue; //verify this updates both player instances.
    // }

    // //move humanOrAi() to gamePlay?
    // humanOrAi() {
    //   //prompts to interface with DOM.
    //   const p2Type = prompt("Input: human OR ai");
    //   if (p2Type === "human" || p2Type === "ai") {
    //     return p2Type;
    //   } else {
    //     let response = prompt("invalid response, please input: human/ai");
    //     return humanOrAi(response); 
    //   }
    //   //return p2Type; 
    // }
  
  
  }
  
