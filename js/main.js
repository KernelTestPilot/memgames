
  //Skapa  variabler
  const maincontainer = document.querySelector(".game")

  //skapar playerconfig via form sen appendas spelet till maincontainer
  function getData(form) {
    let formData = new FormData(form);
    let playerconfig = Object.fromEntries(formData);
    let game = new Game(playerconfig);
    game.createDeck(maincontainer);
  }

  document.getElementById("playerform").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  })


 

