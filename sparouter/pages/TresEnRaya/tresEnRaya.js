//Importamos los estilos de la hoja de estilos correspondiente. 
import "./tresEnRaya.css"

//Creamos función template

const template = () => `

        <div id="gameboard"></div>

        <p id="info"></p>`



      


const addListener = () =>{
  //Creamos los eventos de nuestros elementos html
//mecanismos del juego
const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
//creamos las casillas vacias
const startCells = [
  "", "", "", "", "", "", "", "", "",
]

let go = "circle"
infoDisplay.textContent = "Circle goes first"


function createBoard(){
  startCells.forEach((cell, index) => {
   const cellElement =  document.createElement("div")
   cellElement.classList.add("square")
   cellElement.id = index
   cellElement.addEventListener("click", addGo)
   gameBoard.append(cellElement)
  })
}
createBoard()
//función que añadirá o un circulo o una cruz
function addGo(e) {
const goDisplay = document.createElement("div")
goDisplay.classList.add(go)
e.target.append(goDisplay)
go = go === "circle" ? "cross" : "circle"
infoDisplay.textContent = `It is now ${go}'s go.`
e.target.removeEventListener("click", addGo)
checkScore()
}

//Esta función chequea los scores/condiciones de victoria
function checkScore() {
  const allSquares = document.querySelectorAll(".square")
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,5]
  ]
//estos forEach llamados winningCombos son para definir las condiciones ganadores de circulo o cruz
  winningCombos.forEach(array => {
    const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"))
  
    if (circleWins) {
    infoDisplay.textContent = "Circle wins!"
    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
    return 
    }
  })

  winningCombos.forEach(array => {
    const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("cross"))
  
    if (crossWins) {
    infoDisplay.textContent = "Cross wins!"
    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
    return 
    }
  })

  
}

}

//Pintamos el template

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
 addListener();
}