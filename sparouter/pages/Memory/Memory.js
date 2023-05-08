//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Memory.css"

//Creamos función template

const template = () => `Estoy en Memory`

//Creamos los eventos de nuestros elementos html

const addListener = () =>{

}

//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
}