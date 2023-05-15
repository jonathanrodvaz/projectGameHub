//Importamos los estilos de la hoja de estilos correspondiente. 
import { initControler } from "../../utils/router";
import "./Dashboard.css"


//Creamos función template
const template = () => `
<div id="containerDashboard">
    <ul>
        <li>
             <figure id="figurePokemon" class="figureDashboard">
                <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683530910/pokemon-pokedex-pikachu_gbfaaa.webp" 
                alt="Clicka aquí para acceder a la página Pokedex"
                id="imgPokemon" 
                />
                <h2>Pokédex</h2>
            </figure>    
        </li>
        <li>
            <figure id="figureManga" class="figureDashboard">
            <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1684146242/gorgis-gaming_shutterstock_LightField-Studios_rv0kch.jpg"
            alt="Clicka aquí para acceder al juego Memory-Dog!"
            id="imgMemory"
            />
            <h2>Memory-Dog</h2>
        </figure>    
        </li>
        <li>
            <figure id="figureMemory" class="figureDashboard">
            <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1684086181/tictac_uqpyw1.png"
                alt="Clicka aquí para acceder al juego de Tic Tac Toe"
                id="imgTresEnRaya"
                    />
   <h2>Tres en Raya</h2>
</figure>    
</li>
<li>
             <figure id="figureQuiz" class="figureDashboard">
                <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1684145939/36337_pokemon-quiz_mjvqi3.jpg" 
                alt="Clicka aquí para acceder al Poke-Quiz"
                id="imgQuiz" 
                />
                <h2>Poke-Quiz</h2>
            </figure>    
        </li>
       
    </ul>
</div>
`
;

//Creamos los eventos de nuestros elementos html

const addListeners = () =>{
    const imgPokemon = document.getElementById("imgPokemon");
        imgPokemon.addEventListener("click", ()=>{
            initControler("Pokemon");
        })
    const imgMemory = document.getElementById("imgMemory");
        imgMemory.addEventListener("click", ()=>{
            initControler("Memory");
        })
    const imgTresEnRaya = document.getElementById("imgTresEnRaya");
        imgTresEnRaya.addEventListener("click", ()=>{
            initControler("TresEnRaya");
        })
    const imgQuiz = document.getElementById("imgQuiz");
        imgQuiz.addEventListener("click", ()=>{
            initControler("Quiz");
        })

}

//Pintamos el template
export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
   addListeners();
};
