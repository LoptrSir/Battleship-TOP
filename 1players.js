//TOP Battleship project
//Player management logic
//1players.js

// import { Gameboard } from './1gameboard.js';
// import { GamePlay } from './1gamePlay.js';


//^&^&^& Players class is over complicating things if name and score are the extent of the tracked data.  Its better to declared in gamePlay/gameBoard:
// const player1 = {
// name: prompt("Enter name for Player 1"),
// score: 0,
// };
// const player2 = {
// name: prompt("Enter name for Player 2"),
// score: 0,
// };
//^&^&^&


export class Players {
    constructor(name) {
      this.name = name;
      this.score = 0;
      //this.isAI = false; //consider using this to determine if AI is in play
    }
  
    getPlayerName() {
      return this.name;
    }
  
    getScore() {
      return this.score;
    }


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
  
