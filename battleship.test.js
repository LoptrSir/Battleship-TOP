//Battleship project for TOP
//tests.js

//prevents jest from throwing error on myFooter call.
jest.mock("./dom.js", () => ({
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
it('testShip orientation', () => {
  expect(testShip.orientation).toBe('vertical');
})
it('testShip setOrientation change to HORIZONTAL', () => {
  expect(testShip.setOrientation('horizontal')).toBe('horizontal');
})
it("testShip hitCount and Increase hitCount", () => {
  expect(testShip.getHitCounter()).toBe(0);
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  expect(testShip.getHitCounter()).toBe(2);
});

it("testShip isSunk base and modified", () => {
  expect(testShip.getIsSunk()).toBe(false);
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  testShip.increaseHitCount();
  expect(testShip.getIsSunk()).toBe(true);
});


it('testShip getIsVertical VERTICAL True and False', () => {
  expect(testShip.getIsVertical()).toBe(true);
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

it('testBoard getName', () => {
  expect(testBoard.getName()).toBe(undefined); //modify to add a name?
})
it('testBoard getBoard with null values', () => {
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
//not testing  for this.ships as it will likely be removed
it('testBoard getShipsList base and modified', () => {
  expect(testBoard.getShipsList()).toEqual(new Set);
  testBoard.getShipsList().add('Destroyer')
  expect(testBoard.getShipsList()).toContain('Destroyer');
})

it('testBoard getNumberOfShips base and modified', () => {
  expect(testBoard.getNumberOfShips()).toBe(0)
  testBoard.numberOfShips =1;
  expect(testBoard.getNumberOfShips()).toBe(1)
})

it('testBoard getSunkShip base and incremented', () => {
  expect(testBoard.getSunkShips()).toBe(0);
  testBoard.sunkShips = 1;
  expect(testBoard.getSunkShips()).toBe(1);
});

it('testBoard isWithinBounds TRUE and FALSE', () => {
  expect(testBoard.isWithinBounds(1, 2)).toBe(true);
  expect(testBoard.isWithinBounds(11, 2)).toBe(false);
})

it('testBoard isCellAvailable True/False/OutOfbounds', () => {
  expect(testBoard.isCellAvailable(2, 3)).toBe(true);
  testBoard.board[4][4] = 'testShip';
  expect(testBoard.isCellAvailable(4, 4)).toBe(false);
  expect(testBoard.isCellAvailable(12, 3)).toBe(false);
})
// Not testing ChooseShip as this will likely become DOM managed.
it('testBoard placeShip; in range True and False and test ship proper location', () => {
  expect(testBoard.placeShip(testShip, 1, 1)).toBe(true);
    
  // confirm ship is now placed in the correct cells
  const board = testBoard.getBoard();
  expect(board[1][1]).toBe(testShip); 
  expect(board[1][2]).toBe(testShip); 
  expect(board[1][3]).toBe(testShip); 
  expect(board[1][4]).toBe(testShip); 
  expect(testBoard.placeShip(testShip, 10, 1)).toBe(false); //Places ship out of range of board
})


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
