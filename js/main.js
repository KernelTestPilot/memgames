//game loop
while(true){
    //Skapa objekt
const menu = document.querySelector(".playerForm");
const game = new Game();

const player2name = "";
const deck = new memDeck();

//const player1 = new Player(player1name, true)
//const player2 = new Player(player1name, true)
deck.createCards();
deck.shuffleCards();

//ladda spelet
window.onload = () => {
    const maincontainer = document.querySelector(".game")
    game.createDeck(maincontainer, deck.memCards);
}



show(menu)

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', buttonclick));


function buttonclick(event){
    const player1name = document.getElementById("player1").value;
    const player2name = document.getElementById("player2").value;
    console.log(player1name);
    console.log(player2name);
   let human = Boolean = event.target.getAttribute('data-product');
   if(human == "human"){
    human = true;
   }else{
    human = false;
    let e = document.getElementById("selectDiff");
    let value = e.value;
    let botdiff = e.options[e.selectedIndex].text;
    console.log(botdiff)
   }
    console.log(human)
    hide(menu)
}


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