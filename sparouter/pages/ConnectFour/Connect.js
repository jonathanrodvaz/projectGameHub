//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Connect.css"

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
  

}

//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
   addListener();
}