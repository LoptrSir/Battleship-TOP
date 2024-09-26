//TOP Battleship Project
//landingpage for game initialization
//index.js

//relevant imports here
import { myFooter } from "./dom.js";
import { Gameboard } from "./gameboard.js";
//import { myFooter } from "./dom.js";
//call initialize game 


myFooter();


let x = new Gameboard("player1");
x.chooseShip("Destroyer", 0, 0, "vertical");
x.chooseShip("Carrier", 1, 2, "horizontal");