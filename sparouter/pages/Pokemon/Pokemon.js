//Importamos los estilos de la hoja de estilos correspondiente. 
import { dataPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css"


//Creamos función template
let dataServicePokemon
const template = () => 
`<div id="pokemon"> 
    <input type="text" id="inputPokemon"/>
<div class="galleryPokemon"></div>
</div>`;

//Creamos los eventos de nuestros elementos html
//En el data service llamamos al servicio y creamos las figure que luego se pintarán
const dataService = async ()=>{
    //Llamamos al servicio para traer la DATA y le metemos la info a la variable global dataService
    const getData = await dataPokemon();
    dataServicePokemon = getData
    
    //mapeamos la data para crear un figure de cada elemento que mandaremos a inyectar a la galería
    getData.map((pokemon)=>{
       const templateFigure = `
       <figure class="figurePokemon">
        <img src=${pokemon.image} alt=${pokemon.name}>
        <h2>${pokemon.name}</h2>
       </figure>
       `
        
       //una vez creado el figure se lo inyectamos a la galeria con un += para que vaya sumando a la galeria.
       document.querySelector(".galleryPokemon").innerHTML += templateFigure;
    })
}

const addListeners = () =>{
    const inputPokemon = document.getElementById("inputPokemon");
    inputPokemon.addEventListener("input", (e)=>{
        
        filterPokemon(e.target.value)
    })
}
//variable para hacer que el buscador filtre según el input que introduzcamos.
const filterPokemon = (valueInput) => {
    const filterData = dataServicePokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(valueInput.toLowerCase())
    );
};
//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    dataService();
    addListeners();
}