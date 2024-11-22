//Battleship TOP
//GameState is used to make all Classes available to each other
//1gameState.js

//import { player1, player2, player1Board, player2Board } from "./1gameboard.js";

class GameState{
    constructor() {
        this.gamePlay = new GamePlay();
        // this.gameboard = new Gameboard();
        this.player1Board = new Gameboard();
        this.player2Board = new Gameboard();
        this.ships = new Ship(); //Does this make sense when we are creating single instances of Ship during placeShip()? I dont think so.

    }
}

const gameStateInstance = new GameState();
export { gameStateInstance }; //ADD relevant imports
