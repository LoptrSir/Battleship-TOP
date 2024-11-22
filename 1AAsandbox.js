//random bits to clean up code to share without all of the notes.
//DELETE THIS once project is done.



//&*&*&*PLACESHIP  from 1gamePlay.js
//&*GPT only &*
placeShip() {
    const turn = gameStateInstance.gamePlay.turn;

    recursePlaceShip(turn);
}
//address recursePlaceShip as a nested function vs. being its own function.
recursePlaceShip(turn) {
    const shipName = prompt(`${turn} select a ship`).toLowerCase().trim();
    const column = Number(prompt(`${turn} enter column:`));
    while (isNaN(column) || column < 0 || column >= 10) {
        column = Number(prompt(`${turn} invalid input. Please enter a valid column:`));
    }
    const row = Number(prompt(`${turn} enter Row;`));
    while (isNaN(row) || row < 0 || row >= 10) {
        row = Number(prompt(`${turn} invalid input. Please enter a valid row:`));
    }
    let orientation = prompt(`${turn} input "vertical" OR " horizontal"`).toLowerCase().trim();
    if (orientation !== 'vertical' || orientation !== 'horizontal') {
        orientation = prompt(`${turn} invalid input, please enter "vertical" OR "horizontal"`).toLowerCase().trim();
    }

    if (gameStateInstance[`${turn}Board`].shipsList.has(shipName)) {
        //do I need to further breakdown shipName since it is coming from a set?
        throw new Error(`${turn} ${shipName} has already been placed.`);
    }
    //address calling new Ship instance here vs. in GameState.  Each ship is its own instance. how do I resolve that.
    //shipDetails seems to simple to hold an object
    const shipDetails = this.shipsData.find((ship) => ship.name === shipName);
    // if (!shipsData) { 
    if (!shipsDetails) {
        throw new Error(`${turn} ${shipName} not found`);

    }
    const shipInstance = new Ship(
        shipDetails.name,
        shipDetails.size,
        orientation
    );
    gameStateInstance[`${turn}Board`].numberOfShips++; //only increase if valid
    gameStateInstance[`${turn}Board`].shipsList.add(shipInstance);
    //how does the board get updated
    if (gameStateInstance[`${turn}Board`].numberOfShips < 5) recursePlaceShip(turn);
    //am I preventing infinite recursions if there are incorrect inputs?
}

//&* EndGPT &*

//-determine player to prompt P1/2 to placeShip
//-determine player to update P1/p2 board correctly
//&*&*START LOGIC
placeShip() {
    const turn = gameStateInstance.gamePlay.turn;

    recursePlaceShip(turn) {
        const shipName = prompt(`${turn} select a ship`).toLowerCase().trim();
        const column = Number(prompt(`${turn} enter column:`));
        while (isNaN(column) || column < 0 || column >= 10) {
            column = Number(prompt(`${turn} invalid input. Please enter a valid column:`));
        }
        const row = Number(prompt(`${turn} enter Row;`));
        while (isNaN(row) || row < 0 || row >= 10) {
            row = Number(prompt(`${turn} invalid input. Please enter a valid row:`));
        }
        let orientation = prompt(`${turn} input "vertical" OR " horizontal"`).toLowerCase().trim();
        if (orientation === 'vertical' || orientation === 'horizontal') {
        } else {
            alert(`${turn} invalid input, Please enter "vertical" or "horizontal"`);
        }
        if (this.shipsList.has(shipName)) {
            throw new Error(`${turn} ${shipName} has already been placed.`); //if I stay with throw new error: how do I implement a new choice?
            //let response = prompt(`${turn} ${shipName} has already been placed, enter another ship`);
            // return chooseShip(response, column, row, orientation);
        }
        //below where is (ship) being declared from?
        const shipDetails = this.shipsData.find((ship) => ship.name === shipName);
        if (!shipsData) { //is this syntax valid? How is it testing for shipName?
            throw new Error(`${turn} ${shipName} not found`);
            // let response = prompt("Ship not found enter new ship:");
            // return chooseShip(response, column, row, orientation);
        }
        //           //passing shipInstance as an argument: How do I break apart the details in resulting call?
        //   below I am creating a new Ship instance.  is this valid, or do I need to declare the instance else where?
        const shipInstance = new Ship(
            shipDetails.name,
            shipDetails.size,
            orientation
        );
        gameStateInstance[`${turn}Board`].shipsList.add(shipInstance);
        //     //update this.shipsList with shipInstance? OR is this done in processPlaceShip()?
        //    //Use the below return or simply make a call for this.processPlaceShip?
        //   call  processPlaceShip as below
        //   processPlaceShip(shipName, column, row, orientation);

        //   logic to check if all ships are placed, call recursePlaceShip if not and pass back to initializeGame to prompt P2 placeShip if true.
        if (gameStateInstance[`${turn}Board`].shipsList < 5) recursePlaceShip(turn);
        //   or will it simply exit back to initializeGame?
    } //END recursePlaceShip
} //END placeShip()
//&*&*&*END PLACESHIP


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