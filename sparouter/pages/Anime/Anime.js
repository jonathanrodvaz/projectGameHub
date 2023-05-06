//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Anime.css"

//Creamos función template

const template = () => `Estoy en la pagina de Anime`

//Creamos los eventos de nuestros elementos html

const addListener = () =>{

}

//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();

}