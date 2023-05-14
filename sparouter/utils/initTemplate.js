//Importamos el header con su nav y sus botones.
import { printTemplate as printHeader } from "../components/Header/Header";



//Hacemos un initTemplate porque cuando nos metemos en html no hay que tocar el div de id "app". Lo inyectamos todos mediante initTemplate, que primero apunto a app, luego crea header, luego crea main, luego crea footer. En ese orden. 
export const initTemplate = () =>{

//apuntamos al document principal. 
const app = document.querySelector("#app");
//Aqui creamos el header
const header = document.createElement("header");
//Aqui creamos el main en main. 
const main = document.createElement("main");
//Aqui creamos el footer
const footer = document.createElement("footer");
//Se lo inyectamos a la app
app.append(header, main, footer);
//Una vez hecho el app, inyectamos y ejecutamos el header.
printHeader();
};
