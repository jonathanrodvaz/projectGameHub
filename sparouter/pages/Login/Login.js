//Importamos los estilos de la hoja de estilos correspondiente. 
import { initControler } from "../../utils/router";
import "./Login.css"



//Creamos función template

const template = () => `<div class="form">
<input type="text" name="user" placeholder="Como te llamas? :)">
<button id="buttonLogin" alt="introduce tu nombre aquí para entrar!">Insert Coin!</button>
</div>
`

//Creamos los eventos de nuestros elementos html

const addListeners = () =>{
    const buttonLogin = document.getElementById("buttonLogin");
    buttonLogin.addEventListener("click", ()=> {
        const inputLogin = document.querySelector("input");
        localStorage.setItem("user", inputLogin.value);
        if (localStorage.getItem("user")) 
        document.querySelector("nav").style.display = "block";
        initControler();
    });
};

//Pintamos el template

export const printTemplate = () => {
    //Este if es para que cuando pinte la pagina, si no hay usuario, no pinte entonces el header completo y todas las funcionalidades queden retiradas a menos que un usuario se loguee
    if(!localStorage.getItem("user")) 
        document.querySelector("nav").style.display = "none";
    document.querySelector("main").innerHTML = template();
    addListeners();
    
}