class Game {
    constructor() {

    }
    createDeck(maincontainer,array){
        for (var i = 0; i < array.length; i++) {
            let divcard = document.createElement("div");
            divcard.className = "card";
            let divcardfront = document.createElement("div");
            divcardfront.className = "card-front";
            let divcardback = document.createElement("div");
            divcardback.className = "card-back";
      
            divcardback.style.backgroundImage="url("+array[i].backgroundimg+")";
            divcardfront.dataset.value = array[i].value;
        //append allting 
            maincontainer.append(divcard);
            divcard.append(divcardfront);
            divcard.append(divcardback);
            this.eventHandler(divcard);
            }
    }

    eventHandler(div){
        div.addEventListener('click', event => {
        let eventTarget = event.target.getAttribute('data-value');
        console.log(eventTarget);
        div.classList.toggle('flip');
        })
    }
    flipCard(){
        this.classList.toggle('flip');
    
    }
}