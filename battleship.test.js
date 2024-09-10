//Battleship project for TOP
//tests.js

//prevents jest from throwing error on myFooter call.
jest.mock("./domManipulation.js", () => ({
  myFooter: jest.fn(), // Mock the myFooter function
}));
// import { IS_TEST_ENV } from './battleship.js';

import { Ship } from "./battleship.js";
import { Gameboard } from "./battleship.js";
import { Player } from "./battleship.js";
import { initializeGame } from "./battleship.js";
//%%%%if there is a need to use player1Board, player1 etc use next line%%%%
//let { player1Board, player2Board, player1, player2 } = initializeGame;

//Ship tests
let testShip;

beforeEach(() => {
    testShip = new Ship('testShip', 7);
  });

it("create testShip", () => {
  expect(testShip.boat).toBe("testShip");
});
it("testShip size", () => {
  expect(testShip.size).toBe(7);
});
it("testShip hits", () => {
  expect(testShip.hits).toBe(0);
});
it("testShip sunk", () => {
  expect(testShip.sunk).toBe(false);
});

it("isHit", () => {
  expect(testShip.isHit([1,1], [2,1])).toBe(true);
}); //this needs a ship placed in the board?  //build logic

// it("isHit", () => {
//     expect(testShip.isHit([1,1], [2,2])).toBe(false);
//   }); //this needs a ship placed in the board. //build logic

it("hitWhichShip", () => {
  expect(testShip.hitWhichShip(testShip.boat)).toBe("Destroyer"); //build logic
});

// it("isSunk", () => {
//     expect(testShip.isSunk(testShip.boat)).toBe(false); //build logic
//   });

it("isSunk", () => {
  expect(testShip.isSunk(testShip.sunk)).toBe(true);
}); //build logic

//Gameboard tests
let testBoard;

beforeEach(() => {
  testBoard = new Gameboard();
});

it("Build Pieces Grid", () => {
  let expectedGrid = [];
  for (let i = 0; i < 11; i++) {
    let row = [];
    for (let j = 0; j < 11; j++) {
      row.push(i);
    }
    expectedGrid.push(row);
  }
  expect(testBoard.piecesGrid).toEqual(expectedGrid);
});

it("Build Attacks Grid", () => {
    let expectedGrid = [];
    for (let i = 0; i < 11; i++) {
      let row = [];
      for (let j = 0; j < 11; j++) {
        row.push(i);
      }
      expectedGrid.push(row);
    }
    expect(testBoard.attacksGrid).toEqual(expectedGrid);
  });

  it('playerShipCounter', () => {
    expect(testBoard.playerSunkShipCount).toBe(0);
});

  it('opponentShipCounter', () => {
    expect(testBoard.opponentSunkShipCount).toBe(0);
});

// it('placePiece', () => {
//     expect(testBoard.placePiece([2,2], [4,2])).toBe(someresult);
// }); //build logic

// it('playerTurn', () => {
//     expect(testBoard.playerTurn(x)).toBe(someresult);
// }); //build logic

// it('isValidMove', () => {
//     expect(testBoard.isValidMove([2,2], [4,2])).toBe(someresult);
// }); //build logic

// it('displayShot', () => {
//     expect(testBoard.displayShot([2,2], [4,2])).toBe(someresult);
// }); //build logic

it('totalShipsSunk', () => {
    expect(testBoard.totalShipsSunk()).toBe(0);
});

// it('isGameWon', () => {
//     expect(testBoard.isGameWon(x)).toBe(true/false);
// }); //build logic

// it('announceWin', () => {
//     expect(testBoard).toBe(result);
// });

// it('changePlayer', () => {
//     expect(testBoard.changePlayer(x)).toBe(someresult);
// });  //build logic

//Player tests
let testPlayer;
let testPieces = [
    { boat: "carrier", hits: 5 },
    { boat: "battleship", hits: 4 }];

beforeEach(() => {
    testPlayer = new Player('Fernortinor');
    testPlayer.ships = [
        { boat: "carrier", hits: 5 },
        { boat: "battleship", hits: 4 }];
})

it('playerName', () => {
    expect(testPlayer.name).toBe('Fernortinor');
});

it('testShips', () => {
    expect(testPlayer.ships).toEqual(testPieces);
});  

it('testScore', () => {
    expect(testPlayer.score).toBe(0);
});

//do I create a test for initializeGame
