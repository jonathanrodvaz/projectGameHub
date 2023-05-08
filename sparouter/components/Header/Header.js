import { changeColor } from "../../utils/changeColor";
import { initTemplate } from "../../utils/initTemplate";
import { initControler } from "../../utils/router";
import "./Header.css";


const template = () => `
<img
src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683531258/Pngtree_colourful_arcade_games_neon_light_5980587_wao7gj.png" 
alt="GamesHub Logo"
class="logo"
/>
<nav>
    <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683533121/1998261_ygoxfd.png" 
    alt="change to style mode page"
    id="changeColor" 
    />
    <img
     src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683533261/4ae5689a25bd85455b49eba0bddf1f98-game-controller-icon-game-controller_su9opm.png" 
    alt="navigate to home app"
    id="buttonDashboard"
    />
   
 <img 
    src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683533907/5654218_lsfyvw.png"
    alt="pulsa aqui para desloguearte" 
    id="buttonLogout"
    />
</nav>
`;

const addListeners = () => {
    //Evento del boton de cambiar de color
    const buttonChangeColor = document.querySelector("#changeColor");
    buttonChangeColor.addEventListener("click", ()=> {
        const color = changeColor() 
        document.body.style.background = color;
    })

    //Evento del boton para regresar a Home
    const buttonDashboard = document.getElementById("buttonDashboard");
    buttonDashboard.addEventListener("click", ()=> {
        initControler("Dashboard");
    })
    //Evento del boton logout
    const buttonLogout = document.getElementById("buttonLogout");
    buttonLogout.addEventListener("click", (e)=>{
        console.log(e);
        localStorage.removeItem("user");
        initControler("Login");
        if(!localStorage.getItem("user")) 
        document.querySelector("nav").style.display = "none";
    });
};

export const printTemplate = () => {
   document.querySelector("header").innerHTML = template();
   addListeners();
};