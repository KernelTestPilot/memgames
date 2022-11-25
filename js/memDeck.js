class memDeck {
    constructor(deckChoice) {
        this.memCards = []; 
        this.deckChoice = deckChoice;
    }      
    
    createCards() {
        for (let i = 0; i < this.deckChoice.length; i++) {
                let backgroundimg = this.deckChoice[i];
                this.memCards.push(new Card(this.deckChoice[i],backgroundimg));
                this.memCards.push(new Card(this.deckChoice[i],backgroundimg)); 
            }
    }

    shuffleCards(){
        let array = this.memCards;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        
    }
  

    
}