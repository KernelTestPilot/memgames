class Game {
    constructor(playerconfig) {
        this.playerconfig = playerconfig;
        this.roundCounter = 1;
        this.player1score = 0;
        this.player2score = 0;
    }
    SetDeck(){
        let choice = null;
        if(this.playerconfig.selectDeck === "djurgarden"){
             choice = decks.djurgarden;
        }
        if(this.playerconfig.selectDeck == "allsvenskan2022"){
             choice = decks.allsvenskan2022;
        }
        if(this.playerconfig.selectDeck == "eevee"){
             choice = decks.eevee;
        }
        if(this.playerconfig.selectDeck == "pokemon"){
             choice = decks.pokemon;
        }
        return choice;
    }
    createDeck(maincontainer){
        //nytt deck
        let choice = this.SetDeck();
        const deck = new memDeck(choice);
        deck.createCards();
        deck.shuffleCards();
        for (var i = 0; i < deck.memCards.length; i++) {
            let divcard = document.createElement("div");
            divcard.className = "card";
            let divcardfront = document.createElement("div");
            divcardfront.className = "card-front";
            let divcardback = document.createElement("div");
            divcardback.className = "card-back";
      
            divcardback.style.backgroundImage="url("+deck.memCards[i].backgroundimg+")";
            divcardfront.dataset.value = deck.memCards[i].value;
        //append allting 
            maincontainer.append(divcard);
            divcard.append(divcardfront);
            divcard.append(divcardback);
            this.eventHandler(divcard);
            
            }
    }
    
    eventHandler(div){
        div.addEventListener('click', event => {
            const player1 = new Player(this.playerconfig.player1name,true);
            const player2 = new Player(this.playerconfig.player2name);
            if(this.playerconfig.selectHuman == 0){
                player2.human = false;
            }
            let eventTarget = event.target.getAttribute('data-value');
            let flipCount = document.querySelectorAll('.flip:not(.matched-card)').length;
            if (!div.classList.contains('flip') && flipCount < 2) {
                div.classList.toggle('flip');
                const numOfFlippedCardsNodeList = document.querySelectorAll('.flip:not(.matched-card)');
                const numOfFlippedCards = Array.prototype.slice.call(numOfFlippedCardsNodeList)
                
                if (numOfFlippedCards.length == 2 && numOfFlippedCards[0].innerHTML == numOfFlippedCards[1].innerHTML) {
                    numOfFlippedCards[0].classList.add('matched-card');
                    numOfFlippedCards[1].classList.add('matched-card');
                    this.scoreCount();
                } else if (numOfFlippedCards.length == 2) {
                    setTimeout(() => {
                        numOfFlippedCards[0].classList.remove('flip');
                        numOfFlippedCards[1].classList.remove('flip');
                    }, 500)
                    this.roundCounter++;
                    this.createScoreboard();
                }
            } 
            })
    
        }
    flipCard(){
        this.classList.toggle('flip');
    
    }
    scoreCount(){
        if(this.roundCounter % 2 == 0) {
            this.player1score++;
            console.log("player 1 scores")
            console.log(this.player1score)
         }else{
         console.log("player2 scores")
          this.player2score++;
          console.log(this.player2score)
         }

    }
    createScoreboard(){
        const scoreboard = document.querySelector(".scoreboard");
        scoreboard.append(this.player1score);
        scoreboard.append(this.player2score);
    }
}