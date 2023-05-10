//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Memory.css"

//Creamos función template

const template = () => `
<section class="memory-game">
        <div class="memory-card" data-framework="beeDog">
          <img class="front-face" src="../assets/beeDog.jpg" alt="beeDog" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
        <div class="memory-card" data-framework="beeDog">
          <img class="front-face" src="../assets/beeDog.jpg" alt="beeDog" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
    
        <div class="memory-card" data-framework="californiaRollDoggo">
          <img class="front-face" src="../assets/californiarollDoggo.jpg" alt="californiaRollDoggo" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
        <div class="memory-card" data-framework="californiaRollDoggo">
          <img class="front-face" src="../assets/californiarollDoggo.jpg" alt="californiaRollDoggo" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
    
        <div class="memory-card" data-framework="cozyDoggo">
          <img class="front-face" src="../assets/cozyDoggo.jpg" alt="cozyDoggo" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
        <div class="memory-card" data-framework="cozyDoggo">
          <img class="front-face" src="../assets/cozyDoggo.jpg" alt="cozyDoggo" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
    
        <div class="memory-card" data-framework="doggoMinos">
          <img class="front-face" src="../assets/doggoMinos.jpg" alt="doggoMinos" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
        <div class="memory-card" data-framework="doggoMinos">
          <img class="front-face" src="../assets/doggoMinos.jpg" alt="doggoMinos" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
    
        <div class="memory-card" data-framework="fatDoggo">
          <img class="front-face" src="../assets/fatDoggo.jpg" alt="fatDoggo" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
        <div class="memory-card" data-framework="fatDoggo">
          <img class="front-face" src="../assets/fatDoggo.jpg" alt="fatDoggo" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
    
        <div class="memory-card" data-framework="seaPug">
          <img class="front-face" src="../assets/seaPug.jpeg" alt="seaPug" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
        <div class="memory-card" data-framework="seaPug">
          <img class="front-face" src="../assets/seaPug.jpeg" alt="seaPug" />
          <img class="back-face" src="../assets/confused-2.jpg" alt="confused" />
        </div>
      </section>`



      
//Creamos los eventos de nuestros elementos html

const addListener = () =>{
  const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  
  function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add('flip');
  
      if (!hasFlippedCard) {
          //first click
          hasFlippedCard = true;
          firstCard = this;
      } else {
          
          secondCard = this;
      // do card match? 
          if (firstCard.dataset.framework === secondCard.dataset.framework){
              //it's a match!!
              firstCard.removeEventListener('click', flipCard);
              secondCard.removeEventListener('click', flipCard)
               } else {
                  //not a match
                  setTimeout(() => {
                       firstCard.classList.remove('flip');
                      secondCard.classList.remove('flip');  
                      }, 1000) ;
      
                  }
                  checkForMatch();
                  }
              }
  
  function checkForMatch () {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
  
  function disableCards(){
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard)
  
      resetBoard();
  }
  
  
  
  function unflipCards() { 
      lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');  
      
  
  resetBoard(); 
  }, 1000) ;
  
      }
  
  }
  
  function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  }
  
  (function shuffle(){
      cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
      });
  })();
  
  cards.forEach(card => card.addEventListener('click', flipCard));

}

//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
   addListener();
}