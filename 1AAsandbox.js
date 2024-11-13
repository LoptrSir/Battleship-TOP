//random bits to clean up code to share without all of the notes.
//DELETE THIS once project is done.



// manageShotResult(result, cell) {
//     if(result === 'miss') {
//         alert(Miss);
//         advanceTurn;
//     } else if( result === 'hit') {
//         ship.increaseHitCount(); 
//         if (ship.hitCounter >= ship.size) {
//             ship.isSunk = true;
//             //need to modify for correct gameboard
//             Gameboard.sunkShips++;
//             if(this.sunkShips >= 5) {
//                 this.gameWon = true; //this is worthwhile since DOM can manage variables based on this.
//             }
//         }
//         //it seems getIsSunk should be managed in the above if statement.
//         if (ship.getIsSunk() === true)
//             //logic to increase sunkShips count
//           if (this.sunkShips >= 5) {
//                 GamePlay.gameOver = true;
//                 return `You sank my ${this.ship}. You have WON!`;
//           }
//         if (this.isSunk === true) {
//            return `You sank my ${this.ship}`; //and advanceTurn
//         }
//         return ('hit') //and advanceTurn
//     }
// }

// processAttack(column, row) {
//     if (this.isWithinBounds(column, row) === false) {
//       throw new Error("Invalid shot, try again");
//     }
//     //modify this for p1/p2
//     const cell = this.player1Board[column][row];

//     if (cell.attacked) {
//       return "Already Attacked";
//     }
//     cell.attacked = true;

//     let result;

//     if (cell.ship) {
//       result = 'hit'
//      } else {
//       result = 'miss';
//     }
//     return manageShotResult(result, cell)
//   }