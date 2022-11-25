class Game {
    constructor(playerconfig) {
        this.playerconfig = playerconfig;
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
            console.log(this.playerconfig)
    }
    
    eventHandler(div){
        div.addEventListener('click', event => {
            let eventTarget = event.target.getAttribute('data-value');
    
            const numOfFlippedCardsNodeList = document.querySelectorAll('.flip:not(.matched-card)');
            const numOfFlippedCards = Array.prototype.slice.call(numOfFlippedCardsNodeList)
            
           
            if (!div.classList.contains('flip')) {
                div.classList.toggle('flip');
    
                const numOfFlippedCardsNodeList = document.querySelectorAll('.flip:not(.matched-card)');
                const numOfFlippedCards = Array.prototype.slice.call(numOfFlippedCardsNodeList)
    
                if (numOfFlippedCards.length == 2 && numOfFlippedCards[0].innerHTML == numOfFlippedCards[1].innerHTML) {
                    numOfFlippedCards[0].classList.add('matched-card');
                    numOfFlippedCards[1].classList.add('matched-card');
                } else if (numOfFlippedCards.length == 2) {
                    setTimeout(() => {
                        numOfFlippedCards[0].classList.remove('flip');
                        numOfFlippedCards[1].classList.remove('flip');
                    }, 500)
                }
            }  
            })
          
        }
    flipCard(){
        this.classList.toggle('flip');
    
    }
}