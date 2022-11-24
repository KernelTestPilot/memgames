class memDeck {
    constructor() {
        this.memCards = [];    
        this.picCards = [
            "img/dif/bosse_andersson_2020.jpg", 
            "img/dif/elias_andersson_2022.jpg", 
            "img/dif/gustav_wikheim_2022.jpg", 
            "img/dif/hampus_finndell_2022.jpg", 
            "img/dif/hjalmar_ekdal-2022.jpg", 
            "img/dif/jacob_widell_zetterstrom_2022.jpg", 
            "img/dif/joel_asoro_2022.jpg", 
            "img/dif/magnus_eriksson_2022.jpg", 
            "img/dif/piotr_johansson_2022.jpg", 
            "img/dif/rasmus_schuller_2022.jpg", 
            "img/dif/victor_edvardsen_2022.jpg",
            "img/dif/marcus_danielsson_2022.jpg",
        ];
    }      
    
    createCards() {
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        for (let i = 0; i < values.length; i++) {
                let backgroundimg = this.picCards[i];
                this.memCards.push(new Card(values[i],backgroundimg));
                this.memCards.push(new Card(values[i],backgroundimg)); 
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