import { changeColor } from "../../utils/changeColor";
import { initTemplate } from "../../utils/initTemplate";
import { initControler } from "../../utils/router";
import "./Header.css";


const template = () => `
<img
src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683323039/download_cyu49a.png" 
alt="GamesHub Logo"
class="logo"
/>
<nav>
    <img src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683363665/descarga_m9rtdn.jpg" 
    alt="change to style mode page"
    id="changeColor" 
    />
    <img
     src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683368931/images_uocbkp.png" 
    alt="navigate to home app"
    id="buttonDashboard"
    />
   
 <img 
    src="https://res.cloudinary.com/dxemfv61t/image/upload/v1683365489/sign-out-icon-17992_ntundd.png"
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