let editedPlayer = 0;
let activePlayer = 0;
let symbolCount = 1;
let winnerPlayerNumber = 10;
let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");

const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const errorConfigOutput = document.getElementById("error-config-output");
const configInputElement = document.querySelector("#playername");
/* const gameFieldElements=document.querySelectorAll("#game-board li");*/
const gameBoardElement = document.getElementById("active-game");
const playBoardElement=document.getElementById("game-board");
const gameSideInformation = document.getElementById("active-game").children[1];
const gameOverOutputElement = document.getElementById("game-over");
const winnerPlayerNameElement = document.querySelector("#winner-name");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);
/* for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener("click",selectGameField);
} */
playBoardElement.addEventListener("click",selectGameField);
