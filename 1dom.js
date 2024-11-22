//TOP Battleship
//UI actions/manipulations
//DOMManipulation.js

//import { player1, player2, player1Board, player2Board } from "./1gameboard.js";
//import { gameStateInstance } from ".1gameState.js";

export function myFooter() {
  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "LoptrSir";
}
