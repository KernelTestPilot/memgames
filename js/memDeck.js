class memDeck {
    constructor(deckChoice) {
        this.memCards = [];
        this.deckChoice = deckChoice;
    }

    createCards() {
        for (let i = 0; i < this.deckChoice.length; i++) {
            let backgroundimg = this.deckChoice[i];
            this.memCards.push(new Card(i, backgroundimg));
            this.memCards.push(new Card(i, backgroundimg));
        }
    }

    shuffleCards() {
        for (let i = this.memCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.memCards[i], this.memCards[j]] = [this.memCards[j], this.memCards[i]];
        }
    }
}