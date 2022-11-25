const difmemory = [
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

const allsvenskan2022 = [
    "img/allsvenskan/aik.svg", 
    "img/allsvenskan/BK-Häcken-logo.svg", 
    "img/allsvenskan/Degerfors-IF.svg",
    "img/allsvenskan/Djurgården.svg", 
    "img/allsvenskan/GIF-Sundsvall.svg", 
    "img/allsvenskan/Hammarby.svg", 
    "img/allsvenskan/Helsingborgs-IF.svg", 
    "img/allsvenskan/IF-Elfsborg.svg", 
    "img/allsvenskan/IFK-Norrköping.svg", 
    "img/allsvenskan/IFK-Värnamo.svg", 
    "img/allsvenskan/IFK-Göteborg.svg", 
    "img/allsvenskan/IK-Sirius.svg", 
    "img/allsvenskan/Kalmar-FF.svg", 
    "img/allsvenskan/Malmö-FF.svg", 
    "img/allsvenskan/Mjällby.svg", 
    "img/allsvenskan/Varbergs-BoIS.svg"
];

const eevee = [
    "img/eevee/eevee.avif", 
    "img/eevee/vaporeon.avif", 
    "img/eevee/jolteon.avif", 
    "img/eevee/flareon.avif", 
    "img/eevee/espeon.avif", 
    "img/eevee/umbreon.avif", 
    "img/eevee/leafeon.avif", 
    "img/eevee/glaceon.avif", 
    "img/eevee/sylveon.avif", 
    "img/eevee/ditto.avif"
];

const pokemon = [
    "img/pokemon/bulbasaur.avif", 
    "img/pokemon/charmander.avif", 
    "img/pokemon/squirtle.avif", 
    "img/pokemon/caterpie.avif", 
    "img/pokemon/weedle.avif", 
    "img/pokemon/pidgey.avif", 
    "img/pokemon/spearow.avif", 
    "img/pokemon/pikachu.avif", 
    "img/pokemon/rattata.avif", 
    "img/pokemon/sandshrew.avif",
    "img/pokemon/ekans.avif", 
    "img/pokemon/nidoran-f.avif", 
    "img/pokemon/nidoran-m.avif"
];

let picCards = allsvenskan2022;
let values = picCards.length;

class memDeck {
    constructor() {
        this.memCards = [];
    }

    createCards() {
        for (let i = 0; i < values; i++) {
                let backgroundimg = picCards[i];
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