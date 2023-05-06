//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Manga.css"

//Creamos función template

const template = () => `Estoy en Manga`

//Creamos los eventos de nuestros elementos html

const addListener = () =>{

}

//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
}