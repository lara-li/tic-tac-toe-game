function resetGame() {
  activePlayer = 0;
  symbolCount = 1;
  winnerPlayerNumber = 10;
  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      playBoardElement.children[gameBoardIndex].textContent = "";
      playBoardElement.children[gameBoardIndex].classList.remove("disabled");
      gameBoardIndex += 1;
    }
  }
  gameOverOutputElement.style.display = "none";
  winnerPlayerNameElement.innerHTML = "Player Name";
}

function startNewGame() {
  if (!(players[0].name && players[1].name)) {
    return;
  } else {
    gameBoardElement.style.display = "block";
    gameSideInformation.style.display = "block";
  }
  resetGame();
  writeActivePlayer();
}
function writeActivePlayer() {
  const activePlayerName = document.getElementById("active-player-name");
  activePlayerName.textContent = players[activePlayer].name;
  return;
}
function checkForGameOver() {
  for (let i = 0; i < gameData.length; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      winnerPlayerNumber = gameData[i][0];
      gameOver();
      return 10;

    } else if (
      gameData[0][i] > 0 &&
      gameData[0][i] == gameData[1][i] &&
      gameData[1][i] == gameData[2][i]
    ) {
      winnerPlayerNumber = gameData[0][i];
      gameOver();
      return 10;

    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    winnerPlayerNumber = gameData[0][0];
    gameOver();
    return 10;

  } else if (
    gameData[0][2] > 0 &&
    gameData[0][2] == gameData[1][1] &&
    gameData[1][1] == gameData[2][0]
  ) {
    winnerPlayerNumber = gameData[0][2];
    gameOver();
    return 10;
  } else if (symbolCount === 10) {
    return -1;
  }
}
function checkForDraw() {
  if (checkForGameOver() === -1) {
    /*     gameOverOutputElement.innerHTML="! Nobody won, DRAW!";
     */ gameOverOutputElement.textContent = "! Nobody won, it's a DRAW!";
    gameOverOutputElement.style.fontSize = "1.3rem";
    gameOverOutputElement.style.display = "block";
    gameSideInformation.style.display = "none";
  } else return;
}
function gameOver() {
  winnerPlayerNumber -= 1;
  winnerPlayerNameElement.innerHTML = players[winnerPlayerNumber].name;
  gameOverOutputElement.style.display = "block";
  gameSideInformation.style.display = "none";
}
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  writeActivePlayer();
}

function selectGameField(event) {
  const selectedCol = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;
  if (event.target.tagName !== "LI") {
    console.log(event.target);
    return;
  } else {
    if (symbolCount <= 9) {
      console.log(gameData);
      if (gameData[selectedRow][selectedCol] > 0) {
        return;
      }
      event.target.textContent = players[activePlayer].symbol;
      event.target.classList.add("disabled");
      gameData[selectedRow][selectedCol] = activePlayer + 1;
      symbolCount += 1;
      console.log(symbolCount);
      checkForGameOver();
      checkForDraw();
      switchPlayer();
    } else {
      return;
    }
  }
}
