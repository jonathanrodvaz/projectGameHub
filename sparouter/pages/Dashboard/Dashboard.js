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
            <img src="https://sm.ign.com/ign_es/feature/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_sypg.jpg" 
            alt="Clicka aquí para acceder a"
            id="imgMemory"
            />
            <h2>Memory</h2>
        </figure>    
        </li>
        <li>
            <figure id="figureAnime" class="figureDashboard">
                <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683224285/the-top-25-greatest-anime-characters-of-all-time_sypg_xsr9qo.jpg" 
                alt="Clicka aquí para acceder a"
                id="imgAnime"
                />
                <h2>Anime</h2>
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
    const imgAnime = document.getElementById("imgAnime");
        imgAnime.addEventListener("click", ()=>{
            initControler("Anime");
        })

}

//Pintamos el template
export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
   addListeners();
};
