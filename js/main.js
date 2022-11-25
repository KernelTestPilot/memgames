//game loop
while(true){

    //Skapa objekt och variabler
const menu = document.querySelector(".playerForm");
const maincontainer = document.querySelector(".game")




//skapar playerconfig via formen sen appendas spelet till maincontainer
function getData(form) {
  var formData = new FormData(form);
  const playerconfig = Object.fromEntries(formData);
  const game = new Game(playerconfig);
  game.createDeck(maincontainer);

  hide(menu);
}
document.getElementById("playerform").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);

});

//funktioner för att visa eller gömma html
function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}

function show (elements, specifiedDisplay) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = specifiedDisplay || 'block';
  }
}

break;
}