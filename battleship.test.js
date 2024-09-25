//Battleship project for TOP
//tests.js

//prevents jest from throwing error on myFooter call.
jest.mock("./domManipulation.js", () => ({
  myFooter: jest.fn(), // Mock myFooter()
}));

import { Ship } from "./ships.js";
import { Gameboard } from "./gameboard.js";
// import { Player } from "./battleship.js";
// import { initializeGame } from "./battleship.js";

//***Ship tests
let testShip;

beforeEach(() => {
    testShip = new Ship('testShip', 4, 'vertical');
  });

it("testShip getName", () => {
  expect(testShip.getName()).toBe("testShip");
});

it("testShip getSize", () => {
  expect(testShip.getSize()).toBe(4);
});
it("testShip hitCount", () => {
  expect(testShip.getHitCounter()).toBe(0);
});
it("testShip isSunk", () => {
  expect(testShip.getIsSunk()).toBe(false);
});

//can 
it("isSunk: TRUE", () => {
  //testShip.sunkShips = true;
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  expect(testShip.getIsSunk()).toBe(true);
}); 

it('getIsVertical VERTICAL', () => {
  expect(testShip.getIsVertical()).toBe(true);
})

it('setOrientation HORIZONTAL', () => {
  expect(testShip.setOrientation('horizontal')).toBe('horizontal');
})

//^^^  build logic to support these tests  ^^^
// it("isHit", () => {
//   expect(testShip.isHit(1, 1)).toBe(true);
// }); //this needs a ship placed in the board?  //build logic

// it("isHit", () => {
//     expect(testShip.isHit(2, 2)).toBe(false);
//   }); //this needs a ship placed in the board. //build logic

// it("hitWhichShip", () => {
//   expect(testShip.hitWhichShip(testShip.getName())).toBe("testShip"); //build logic
// });



//***Gameboard tests
let testBoard;

beforeEach(() => {
  testBoard = new Gameboard();
});

it('buildGrid with null values', () => {
  const expectedGrid = Array(10)
  .fill(null)
  .map(() => Array(10).fill(null));

  expect(testBoard.getBoard()).toEqual(expectedGrid);

    for (let row of testBoard.getBoard()) {
    for (let cell of row) {
      expect(cell).toBeNull();
    }
  }
}) 


it('getSunkShip', () => {
  expect(testBoard.getSunkShips()).toBe(0);
});

it('isWithinBounds TRUE', () => {
  expect(testBoard.isWithinBounds(1, 2)).toBe(true);
})
it('isWithinBounds FALSE', () => {
  expect(testBoard.isWithinBounds(11, 2)).toBe(false);
})

it('isCellAvailable TRUE', () => {
  expect(testBoard.isCellAvailable(2, 3)).toBe(true);
})
it('isCellAvailable OUTOFBOUNDS', () => {
  expect(testBoard.isCellAvailable(12, 3)).toBe(false);
})

it('placeShip; in range', () => {
  expect(testBoard.placeShip(testShip, 1, 1)).toBe(true);
    
  // confirm ship is now placed in the correct cells
  const board = testBoard.getBoard();
  expect(board[1][1]).toBe(testShip); // Check the starting cell
  expect(board[1][2]).toBe(testShip); // Check the second cell if vertical
  expect(board[1][3]).toBe(testShip); // Check the third cell if vertical
  expect(board[1][4]).toBe(testShip); // Check the fourth cell if vertical
  //expect(board[1][5]).toBe(testShip); // Check the fifth cell if vertical
})

it('placeShip: Out of range', () => {
  expect(testBoard.placeShip(testShip, 10, 1)).toBe(false);
})

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

// it('getShipsSunk', () => {
//     expect(testBoard.getSunkShips()).toBe(0);
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
