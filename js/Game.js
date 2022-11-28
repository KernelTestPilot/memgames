class Game {
    constructor(playerconfig) {
        this.playerconfig = playerconfig;
        this.roundCounter = 0;
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
        const player1 = new Player(this.playerconfig.player1name,true);
        const player2 = new Player(this.playerconfig.player2name);
            if(this.playerconfig.selectHuman == 0){
                player2.human = false;
            }
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
            if(player2.human){
            this.eventHandler(divcard, player1, player2);
            }else{
                this.eventHandlerComputer(divcard, player1,player2)
            }
            }
            this.createScoreboard();
    }
    checkRandom(randomPick,randomPick2,targetableCards){
        if (randomPick == randomPick2 && randomPick2 < targetableCards.length) {
            randomPick2 += 1;
        } else if (randomPick == randomPick2 && randomPick2 >= targetableCards.length) {
            randomPick2 -= targetableCards.length;
        }
    }
    eventHandler(div,player1,player2){
    
        div.addEventListener('click', event => {
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
                    this.createScoreboard();
                } else if (numOfFlippedCards.length == 2) {
                    setTimeout(() => {
                        numOfFlippedCards[0].classList.remove('flip');
                        numOfFlippedCards[1].classList.remove('flip');
                    }, 500)
                    this.roundCounter++;
                    this.createScoreboard();                }
        }
        })
    }

    eventHandlerComputer(div, player1, player2){
            div.addEventListener('click', event => {
                console.log(this.roundCounter)
                let eventTarget = event.target.getAttribute('data-value');
                let flipCount = document.querySelectorAll('.flip:not(.matched-card)').length;

                if (!div.classList.contains('flip') && flipCount < 2) {
                    div.classList.toggle('flip');
                    const numOfFlippedCards = [...document.querySelectorAll('.flip:not(.matched-card)')];
                    const targetableCards = [...document.querySelectorAll('.card:not(.flip):not(.matched-card)')];
                    if (numOfFlippedCards.length == 2 && numOfFlippedCards[0].innerHTML == numOfFlippedCards[1].innerHTML) {
                        numOfFlippedCards[0].classList.add('matched-card');
                        numOfFlippedCards[1].classList.add('matched-card');
                        this.scoreCount();
                        this.createScoreboard();
                    } else if (numOfFlippedCards.length == 2) {
                        setTimeout(() => {
                            numOfFlippedCards[0].classList.remove('flip');
                            numOfFlippedCards[1].classList.remove('flip');
                        }, 500)
                   
                        this.roundCounter++;
                        
                        this.checkComputer();
                    }
                    
                
                 }  
                
            }
            )}

     checkComputer(){
        if (!this.roundCounter % 2 == 0 ) {             
            let targetableCards = [...document.querySelectorAll('.card:not(.flip):not(.matched-card)')];
            let randomPick = Math.floor(Math.random() * targetableCards.length);
            let randomPick2 = Math.floor(Math.random() * targetableCards.length);
            while(randomPick == randomPick2){
                randomPick2 = Math.floor(Math.random() * targetableCards.length);
            }
           /* if (randomPick == randomPick2 && randomPick2 < targetableCards.length) {
                randomPick2 += 1;
            } else if (randomPick == randomPick2 && randomPick2 >= targetableCards.length) {
                randomPick2 -= targetableCards.length;
            }
         */
            setTimeout(() => {
                targetableCards[randomPick].classList.add('flip');
                targetableCards[randomPick2].classList.add('flip');
                this.createScoreboard();    
                if (targetableCards[randomPick].innerHTML == targetableCards[randomPick2].innerHTML) {
            
                    targetableCards[randomPick].classList.add('matched-card');
                    targetableCards[randomPick2].classList.add('matched-card');
                    this.scoreCount();
                    this.createScoreboard();
                    this.roundCounter++;

                } else {
                    setTimeout(() => {
                        targetableCards[randomPick].classList.remove('flip');
                        targetableCards[randomPick2].classList.remove('flip');
                        this.roundCounter++;
                        this.createScoreboard();
                    }, 1000) 
                      
                }   this.createScoreboard();     
            }, 1000)
          

        }    
     }
    scoreCount(){
        let scoreboard = document.querySelector(".updates");
        let updates = document.createElement("div");
        if(this.roundCounter % 2 == 0) {
            this.player1score++
            updates.innerHTML = this.playerconfig.player1name + " hittade en match!";
            scoreboard.append(updates)
         }else{
          this.player2score++;
          updates.innerHTML = this.playerconfig.player2name + " hittade en match!";
          scoreboard.append(updates)
         }

    }
    createScoreboard(){
        
        const scoreboard = document.querySelector(".scoreboard");
        let currentplayer = document.createElement("div");

        scoreboard.innerHTML = "";
        if(this.roundCounter % 2 == 0) {
            currentplayer.innerHTML = "Just nu är det " + this.playerconfig.player1name + " tur <br></br>" ;
            scoreboard.append(currentplayer)
        }else{
            currentplayer.innerHTML = "Just nu är det " + this.playerconfig.player2name + " tur <br></br>" ;
            scoreboard.append(currentplayer)
        }

        let player1score = document.createElement("div");
        let player2score = document.createElement("div");
        let player1name = document.createElement("div");
        let player2name = document.createElement("div");
   
        player1score.innerHTML = this.player1score;
        player2score.innerHTML = this.player2score;
        player1name.innerHTML = this.playerconfig.player1name;
        player2name.innerHTML = this.playerconfig.player2name;
        scoreboard.append(player1name)
        scoreboard.append(player1score)
        scoreboard.append(player2name)
        scoreboard.append(player2score)
      
    }
}