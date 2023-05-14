//Importamos los estilos de la hoja de estilos correspondiente. 

import "./Pokemon.css"


//Creamos función template
let dataServicePokemon;
let typeGlobal;
const template = () => 
`<div id="pokemon"> 
    <div id='pokemon'>
    <div id='containerFilter'>
        <div id='filterButton'></div>
    <input type="text" id="inputPokemon" placeholder='Introduce un Pokemon...'/>
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
   
    data.map((pokemon)=> {
        
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
    <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon" />
        <h2>${pokemon.name}</h2>
        <p>#${pokemon.id}</p>
        <h3>${pokemon.type[0].type.name}</h3>
        <p>Altura: ${pokemon.height}m</p>
        <p>Peso: ${pokemon.weight}kg</p>
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
        
        filterPokemon(e.target.value, "name")
    })
//Metemos el evento de los botones de filtrado

typeGlobal.forEach((type)=>{
    const buttonType = document.querySelector(`.${type}`);
   
    buttonType.addEventListener('click', ()=>{
        filterPokemon(type, "type")
    })

})

}

//variable para hacer que el buscador filtre según el input que introduzcamos.
const filterPokemon = (filtro, donde) => {

    switch (donde) {
        case "name":{
            const filterData = dataServicePokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(filtro.toLowerCase()));
            createAndPrintFigure(filterData)
    }
            break;

        case "type":
            {
                const filterData = dataServicePokemon.filter((pokemon) =>
                pokemon.type.toLowerCase().includes(filtro.toLowerCase()));
                createAndPrintFigure(filterData)
            
            
            break;  
            
        }
            

    }
};


//PIntar los botones de los filtros de cada tipo de pokemon

const printButtons = (types) => {
    types.forEach((type) => {
        

        //Si queremos hacer un template dentro de un template, tenemos que hacer una constante.
        const idCustom = `Type ${type[0].toUpperCase()+ type.slice(1)}`
        const buttonType = `<button class='buttonFilter ${type}' id=${idCustom}>${type}</button>`
        const filterButton = document.getElementById('filterButton');
        filterButton.innerHTML += buttonType;
    });
}


//Pintamos el template

export const printTemplate = (data) => {
     const {type, dataPokemon} = data
     typeGlobal = type;
     dataServicePokemon = dataPokemon;
    document.querySelector("main").innerHTML = template();
    dataService(dataPokemon);
    printButtons(type);
    addListeners();
}