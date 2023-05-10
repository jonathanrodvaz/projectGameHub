//Importamos los estilos de la hoja de estilos correspondiente. 

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
const dataService = async (data)=>{
    //Llamamos al servicio para traer la DATA y le metemos la info a la variable global dataService
    
    dataServicePokemon = data;
    createAndPrintFigure(dataServicePokemon)
    
}
//Función general que nos va a servir para pintar tanto los pokemon del filter como los de la data
const createAndPrintFigure = (data) =>{
document.querySelector(".galleryPokemon").innerHTML = "";
    //Mapeamos la data para crear un figure de cada elemento que mandaremos a inyectar a la galeria
   
    data.pokemonData.map((pokemon)=> {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
    <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon" />
        <h2>${pokemon.name}</h2>
        <h3>${pokemon.type[0].type.name}</h3>
        <h4>${pokemon.name.height}</h4>
    </figure>
    `;
    //Una vez creado el figure se lo inyectamos a la galeria con un += para que vaya sumando a lo que ya tiene
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
}); 
}

const addListeners = () =>{
    //Evento TO INPUT
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
    createAndPrintFigure(filterData);
};
//Pintamos el template

export const printTemplate = (data) => {
     const {type, dataPokemon} = data
    document.querySelector("main").innerHTML = template();
    dataService(dataPokemon);
    addListeners();
}