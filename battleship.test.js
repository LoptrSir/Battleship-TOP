//Battleship project for TOP
//tests.js

//prevents jest from throwing error on myFooter call.
jest.mock("./dom.js", () => ({
  myFooter: jest.fn(), // Mock myFooter()
}));

import { Ship } from "./ships.js";
import { Gameboard } from "./gameboard.js";
import { GamePlay } from "./gamePlay.js";

// import { Player } from "./battleship.js";
// import { initializeGame } from "./battleship.js";

//***Ship tests
let testShip;

beforeEach(() => {
  testShip = new Ship("testShip", 4, "vertical");
});
// all Ship class tests are in this one test
it("testShip: name, size, orientation", () => {
  expect(testShip.getName()).toBe("testShip");
  expect(testShip.getSize()).toBe(4);
  expect(testShip.orientation).toBe("vertical");
  expect(testShip.getIsVertical()).toBe(true);
  expect(testShip.setOrientation("horizontal")).toBe("horizontal");
  expect(testShip.getHitCounter()).toBe(0);
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  expect(testShip.getHitCounter()).toBe(2);
  expect(testShip.getIsSunk()).toBe(false);
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  expect(testShip.getIsSunk()).toBe(true);
});

//***Gameboard tests
let testBoard;

beforeEach(() => {
  testBoard = new Gameboard();
});

it("testBoard getName", () => {
  expect(testBoard.getName()).toBe(undefined); //modify to add a name?
});
it("testBoard getBoard with null values", () => {
  const expectedGrid = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));
  // expect(testBoard.getBoard()).toEqual(expectedGrid);
  expect(testBoard.getPlayer1Board()).toEqual(expectedGrid);

  // for (let row of testBoard.getBoard()) {
    for (let row of testBoard.getPlayer1Board()) {
    for (let cell of row) {
      expect(cell).toBeNull();
    }
  }
});
//not testing  for this.ships as it will likely be removed
it("testBoard getShipsList base and modified", () => {
  expect(testBoard.getShipsList()).toEqual(new Set());
  testBoard.getShipsList().add("Destroyer");
  expect(testBoard.getShipsList()).toContain("Destroyer");
});

it("testBoard getNumberOfShips base and modified", () => {
  expect(testBoard.getNumberOfShips()).toBe(0);
  testBoard.numberOfShips = 1;
  expect(testBoard.getNumberOfShips()).toBe(1);
});

it("testBoard getSunkShip base and incremented", () => {
  expect(testBoard.getSunkShips()).toBe(0);
  testBoard.sunkShips = 1;
  expect(testBoard.getSunkShips()).toBe(1);
});

it("testBoard isWithinBounds TRUE and FALSE", () => {
  expect(testBoard.isWithinBounds(1, 2)).toBe(true);
  expect(testBoard.isWithinBounds(11, 2)).toBe(false);
});

it("testBoard isCellAvailable True/False/OutOfBounds", () => {
  expect(testBoard.isCellAvailable(2, 3)).toBe(true);
  //testBoard.board[4][4] = "testShip";
  testBoard.player1Board[4][4] = "testShip";
  expect(testBoard.isCellAvailable(4, 4)).toBe(false);
  expect(testBoard.isCellAvailable(12, 3)).toBe(false);
});
// Not testing ChooseShip as this will likely become DOM managed.
it("testBoard placeShip; in range true/false and test ship properly placed", () => {
  expect(testBoard.placeShip(testShip, 1, 1)).toBe(true);

  // confirm ship is now placed in the correct cells
  // const board = testBoard.getBoard();
  const board = testBoard.getPlayer1Board();

  expect(board[1][1].ship).toBe(testShip);
  expect(board[1][2].ship).toBe(testShip);
  expect(board[1][3].ship).toBe(testShip);
  expect(board[1][4].ship).toBe(testShip);
  expect(testBoard.placeShip(testShip, 10, 1)).toBe(false); //Places ship out of range of board
});

it("ValidateAttack logic tests", () => {
  //invalid shot
  expect(() => {
    testBoard.makeAttack(-1, 11);
  }).toThrow("Invalid shot, try again");
});

//^^^

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
