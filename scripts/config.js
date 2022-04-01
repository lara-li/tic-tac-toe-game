function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //+ is converting strings to integers
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
function closePlayerConfig() {
  backdropElement.style.display = "none";
  playerConfigOverlayElement.style.display = "none";
  //formElement.children[1].display="none";
  errorConfigOutput.style.display = "none";
}
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  if (!enteredPlayerName) {
    errorConfigOutput.style.display = "block";
    configInputElement.value="";
    configInputElement.addEventListener("input", closeError);
  } else {
    let updatedPlayerDataElement = document.getElementById(
      "player-" + editedPlayer + "-data"
    );
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerConfig();
    configInputElement.value="";
  }
}
function closeError() {
  if (configInputElement.value.trim()) {
    errorConfigOutput.style.display = "none";
  }
}
