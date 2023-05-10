import "./Footer.css";


const template = () => `<h3>Copyright Jonathan Rodríguez 2023</h3>`;



export const printTemplate = () => {
   document.querySelector("footer").innerHTML = template();
   addListeners();
};