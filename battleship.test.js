//Battleship project for TOP
//tests.js

//prevents jest from throwing error on myFooter call.
jest.mock("./domManipulation.js", () => ({
  myFooter: jest.fn(), // Mock myFooter()
}));
// import { IS_TEST_ENV } from './battleship.js';

import { Ship } from "./ships.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./battleship.js";
import { initializeGame } from "./battleship.js";
//%%%%if there is a need to use player1Board, player1 etc use next line%%%%
//let { player1Board, player2Board, player1, player2 } = initializeGame;

//***Ship tests
let testShip;

beforeEach(() => {
    testShip = new Ship('testShip', 7);
  });

// it("create testShip", () => {
//   expect(testShip.name).toBe("testShip");
// });

it("create testShip", () => {
  expect(testShip.getName()).toBe("testShip");
});

it("testShip getSize", () => {
  expect(testShip.getSize()).toBe(7);
});
it("testShip hitCount", () => {
  expect(testShip.hitCount()).toBe(0);
});
it("testShip isSunk", () => {
  expect(testShip.isSank()).toBe(false);
});

it("isSunk", () => {
  expect(testShip.isSank()).toBe(true);
}); 

//^^^  build logic to support these tests  ^^^
// it("isHit", () => {
//   expect(testShip.isHit([1,1], [2,1])).toBe(true);
// }); //this needs a ship placed in the board?  //build logic

// it("isHit", () => {
//     expect(testShip.isHit([1,1], [2,2])).toBe(false);
//   }); //this needs a ship placed in the board. //build logic

// it("hitWhichShip", () => {
//   expect(testShip.hitWhichShip(testShip.name)).toBe("Destroyer"); //build logic
// });

// it("isSunk", () => {
//     expect(testShip.isSunk(testShip.boat)).toBe(false); //build logic
//   });
//^^^


//***Gameboard tests
let testBoard;

beforeEach(() => {
  testBoard = new Gameboard();
});



//modify following test to work bassed of initialize() call instead of class defaults
it('buildGrid with null values', () => {
  const expectedGrid = Array(10)
  .fill(null)
  .map(() => Array(10).fill(null));

  expect(testBoard.board).toEqual(expectedGrid);

  for (let row of testBoard.board) {
    for (let cell of row) {
      expect(cell).toBeNull();
    }
  }
}) 

it('playerSunkShipCounter', () => {
  expect(testBoard.sunkShips).toBe(0);
});


//^^^
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
//^^^

// it('totalShipsSunk', () => {
//     expect(testBoard.totalShipsSunk()).toBe(0);
// });

//^^^
// it('isGameWon', () => {
//     expect(testBoard.isGameWon(x)).toBe(true/false);
// }); //build logic

// it('announceWin', () => {
//     expect(testBoard).toBe(result);
// });

// it('changePlayer', () => {
//     expect(testBoard.changePlayer(x)).toBe(someresult);
// });  //build logic
//^^^

//***Player tests***
// let testPlayer;
// let testPieces = [
//     { boat: "carrier", hitsCount: 5 },
//     { boat: "battleship", hitsCount: 4 }];

// beforeEach(() => {
//     testPlayer = new Player('Fernortinor');
//     testPlayer.ships = [
//         { boat: "carrier", hitsCount: 5 },
//         { boat: "battleship", hitsCount: 4 }];
// })

// it('playerName', () => {
//     expect(testPlayer.name).toBe('Fernortinor');
// });

// it('testShips', () => {
//     expect(testPlayer.ships).toEqual(testPieces);
// });  

// it('testScore', () => {
//     expect(testPlayer.score).toBe(0);
// });

//do I create a test for initializeGame
