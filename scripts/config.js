function openPlayerConfig(event){
   editedPlayer = +event.target.dataset.playerid;
  //  console.log(editedPlayer);
   playerConfigOverlayElement.style.display = "block";
   backdropElement.style.display = "block";  
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = ""; 
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();
  // console.log(enteredPlayerName);

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name";
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-'+editedPlayer+'-data');
  // console.log(updatedPlayerDataElement);
  // console.log(enteredPlayerName);
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer-1].name = enteredPlayerName;
  // console.log(players);
  
  closePlayerConfig();
}