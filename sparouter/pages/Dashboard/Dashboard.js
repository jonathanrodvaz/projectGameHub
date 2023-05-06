//Importamos los estilos de la hoja de estilos correspondiente. 
import { initControler } from "../../utils/router";
import "./Dashboard.css"


//Creamos función template
const template = () => `
<div id="containerDashboard">
    <ul>
        <li>
             <figure id="figurePokemon" class="figureDashboard">
                <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683391677/pngegg_ztewnq.png" 
                alt="Clicka aquí para acceder a la página PokeApi"
                id="imgPokemon" 
                />
                <h2>Pokemon</h2>
            </figure>    
        </li>
        <li>
                 <figure id="figureManga" class="figureDashboard">
            <img src="https://sm.ign.com/ign_es/feature/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_sypg.jpg" 
            alt="Clicka aquí para acceder a"
            id="imgManga"
            />
            <h2>Manga</h2>
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
    const imgManga = document.getElementById("imgManga");
        imgManga.addEventListener("click", ()=>{
            initControler("Manga");
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
