//TOP Battleship Project
//landingpage for game initialization
//index.js

//relevant imports here
import { myFooter } from "./dom.js";
import { Gameboard } from "./gameboard.js";
import { GamePlay } from './gamePlay.js';
import { initializeGame } from './gamePlay.js';

//call initialize game 
// GamePlay.initializeGame();

initializeGame();

myFooter();

//remove this once initializeGame is working
//let x = new Gameboard("player1");
//x.chooseShip("Destroyer", 0, 0, "vertical");
//x.chooseShip("Carrier", 1, 2, "horizontal");