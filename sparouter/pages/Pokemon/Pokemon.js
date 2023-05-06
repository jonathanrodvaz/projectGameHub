//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Pokemon.css"

//Creamos función template

const template = () => `Estoy en Pokemon`

//Creamos los eventos de nuestros elementos html

const addListener = () =>{

}

//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
}