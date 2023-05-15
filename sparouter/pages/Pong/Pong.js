//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Pong.css"

//Creamos función template

const template = () => `
    <h1>Pong Game</h1>
    <canvas></canvas>
    <p>Control the left player by using up and down arrow keys</p>
`

//Creamos los eventos de nuestros elementos html

const addListener = () =>{
// //Variables Globales usadas en el juego de Pong
// let direction = {
//     idle: 0,
//     up: 1,
//     down: 2,
//     left: 3,
//     right: 3
// };

// let rounds = [5, 5, 3, 3, 2];
// let colors = ['#1abc9c', '#2ecc71', '#3498db', '#8c52ff', '#9b59b6'];

// //Codigo para la pelota

// let ball = {
//     new: function (incrementedSpeed) {
//         return{
//             width: 18,
//             height: 18,
//             x: (this.canvas.width / 2) - 9,
//             y: (this.canvas.height/ 2) - 9,
//             moveX: direction.idle,
//             moveY: direction.idle,
//             speed: incrementedSpeed || 7
//         };
//     }
// }

// //El Objeto AI (las lineas o palas que usa el contrincante)
// let ai = {
//     new: function (side) {
//         return{
//             width: 18,
//             height: 180,
//             x: side === 'left' ? 150 : this.canvas.width - 150,
//             y: (this.canvas.height / 2) - 35,
//             score: 0,
//             move: direction.idle,
//             speed: 8
//         }
//     }
// }

// let game = {
//     initialize: function () {
//         this.canvas = document.querySelector('canvas');
//         this.context = this.canvas.getContext('2d');

//         this.canvas.width = 1400;
//         this.canvas.height = 1000;

//         this.canvas.style.width = (this.canvas.width / 2) + 'px';
//         this.canvas.style.height = (this.canvas.height / 2) + 'px';

//         this.player = ai.new.call(this, 'left');
//         this.ai = ai.new.call(this, 'right');
//         this.ball = ball.new.call(this);

//         this.ai.speed = 5;
//         this.running = this.over = false;
//         this.turn = this.ai;
//         this.timer = this.round = 0;
//         this.color = '#8c52ff';

//         pong.menu();
//         pong.listen();
//     }
// }

// endGameMenu: function (text) {
//     //Cambiar el color y fuente de canvas
//     pong.context.font = '45px Courier New';
//     pong.context.fillStyle = this.color;

//     //Dibujar el rectangulo detrás de 'Press any key to begin'
//     pong.context.fillREct(
//         pong.canvas.width / 2 - 350,
//         pong.canvas.height / 2 -48,
//         700,
//         100
//     );

//     //Cambia el color de canvas
//     pong.context.fillStyle = '#ffffff';

//     //Dibuja el menu del final de partida
//     pong.context.fillText(text,
//         pong.canvas.width / 2,
//         pong.canvas.height / 2 + 15
//         );

//         setTimeOut(function () {
//             pong = object.assign({}, game);
//             pong.initialize();
//         }, 3000);
// }

// menu: function () {
//     //Dibuja todos los oobjetos de Pong en su estado actual
//     pong.draw();

//     //Cambia el color y fuente de canvas
//     this.context.font = '50px Courier New';
//     this.context.fillStyle = this.color;

//     //Dibuja el recangulo detrás de 'Press any key to begin' text
//     this.context.fillRect(
//         this.canvas.width / 2 - 350,
//         this.canvas.height / 2 - 48,
//         700,
//         100
//     );

// //Cambia el color de canvas
// this.context.fillStyle = '#ffffff';

// //Dibuja 'Press any key to begin'
// this.context.fillText('Press any key to begin',
//             this.canvas.width / 2,
//             this.canvas.height / 2 + 15
//             )


//  //Actualiza todos los objetos (mueve al jugador, IA, pelota, incremento de puntuacion, etc...)
//  update: function () {
//         if (!this.over) {
//             //Si la pelota colisiona con los limites de pantalla, corrige las coordenadas x / y
//             if (this.ball.x <= 0) pong._resetTurn.call(this, this.ai, this.player);
//             if (this.ball.x >= this.canvas.width - this.ball.width) pong._resetTurn.cal(this, this.
//                 player, this.ai);
//             if (this.ball.y <= 0) this.ball.moveY = direction.down;
//             if (this.ball.y >= this.canvas.height - this.ball.height) this.ball.moveY = direction.up;

//             //Mueve al jugador si el valor de player.move se ha visto actualizado por el input en teclado
//             if (this.player.move === direction.up) this.player.y -= this.player.speed;
//             else if (this.player.move === direction.down) this.player.y += this.player.speed;

//             //Al comienzo de cada turno mueve la pelota en el lada correcto
//             //y aleatoriza la direccion para añadir algo de dificultad
//             if (pong._turnDelayIsOver.call(this) && this.turn) {
//                 this.ball.moveX = this.turn === this.player ? direction.left : direction.right;
//                 this.ball.moveY = [direction.up, direction.down] [Math.round(Math.random())];
//                 this.ball.y = Math.floor(Math.random() * this.canvas.height - 200) + 200;
//                 this.turn = null;



//                 // Si el jugador colisiona con los limites de pantalla actualiza las coordenadas x / y
//                 if (this.player.y <= 0) this.player.y = 0;
//                 else if (this.player.y >= (this.canvas.height - this.player.height)) this.player.y = (this.canvas.height - this.player.height);

//                 //Mueve la pelota en la direccion intencionada basada en los valores moveY y moveX
//                 if (this.ball.moveY === direction.up) this.ball.y -= (this.ball.speed / 1.5);
//                 else if (this.ball.moveY === direction.down) this.ball.y += (this.ball.speed / 1.5);
//                 if (this.ball.moveX === direction.left) this.ball.x -= this.ball.speed;
//                 else if (this.ball.moveX === direction.right) this.ball.x += this.ball.speed;

//                 //Maneja el movimiento de la IA (Contrincante, la maquina)
//                 if (this.ai.y > this.ball.y - (this.ai.height / 2)) {
//                     if (this.ball.moveX === direction.right) this.ai.y -= this.ai.speed / 1.5;
//                     else this.ai.y -= this.ai.speed / 4;

//                 if(this.ai.y < this.ball.y - (this.ai.height / 2)) {
//                     if (this.ball.moveX === direction.right) this.ai.y += this.ai.speed / 1.5;
//                     else this.ai.y += this.ai.speed /4;
//                 }

//                 //Maneja las colisiones contra los limites que realice la IA
//                 if (this.ai.y >= this.canvas.height - this.ai.height) this.ai.y = this.canvas.height - this.ai.height;
//                 else if (this.ai.y <= 0) this.ai.y = 0;

//                 //Maneja las colisiones pelota-jugador
//                 if (this.ball.x - this.ball.width <= this.player.x && this.ball.x >= this.player.x - this.player.width) {
//                     if (this.ball.y <= this.player.y + this.player.height && this.ball.y + this.ball.height >= this.player.y) {
//                         this.ball.x = (this.player.x + this.ball.width);
//                         this.bal.moveX = direction.right;
//                     }


//                 }


//                 // Maneja las colisiones IA-Pelota
//                 if (this.ball.x - this.ball.width <= this.ai.x && this.ball.x >= this.ai.x - this.ai.width) {
//                     if (this.ball.y <= this.ai.y + this.ai.height && this.ball.y + this.ball.height >= this.ai.y){
//                         this.ball.x = (this.ai.x - this.ball.width);
//                         this.ball.moveX = direction.left;
//                     }
//                 }

//                 }
            
//             //Maneja la transicion al final de ronda
//             //Comprueba si el jugador ha ganado la ronda
//             if (this.player.score === rounds[this.round]) {
//                 //Comprueba si quedan más rondas/niveles y muestra la pantalla de victoria en caso de no quedar más
//                 if (!rounds[this.round +1]) {
//                     this.over = true;
//                     setTimeout(function () { pong.endGameMenu('Winner!'); }, 1000);
//                                     } else {
//                                         //Si no hay otra ronda, resetea todos los valores y incrementa el contador de numero de rondas
//                                         this.color = this._generateRoundColor();
//                                         this.player.score = this.ai.score = 0;
//                                         this.player.speed += 0.5;
//                                         this.ai.speed += 1;
//                                         this.ball.speed += 1;
//                                         this.round += 1;

//                                     }
//             }
            
//             //Comprueba si la IA ha ganado la ronda
//             else if (this.ai.score === rounds[this.round]) {
//                 this.over = true;
//                 setTimeout(function () { pong.endGameMenu('Game Over!'); }, 1000);
//             }

            
//             }

//             //Dibuja los objetos en el elemento canvas
//             draw: function () {
//                 //Limpia el canvas
//                 this.context.clearRect(
//                     0,
//                     0,
//                     this.canvas.width,
//                     this.canvas.height
//                 );
            
//             //Pinta el fill style a negro
//             this.context.fillStyle = this.color;

//             //Dibuja el background
//             this.context.fillRect(
//                 0,
//                 0,
//                 this.canvas.width,
//                 this.canvas.height
//             );

//             //Se encarga de rellenar el stylo a blanco (para las palas y la bola)
//             this.context.fillStyle = '#ffffff';
            
//             //Dibuja al jugador
//             this.context.fillRect(
//                 this.player.x,
//                 this.player.y,
//                 this.player.width,
//                 this.player.height
//             );

//             //Dibuja a la IA
//             this.context.fillRect(
//                 this.ai.x,
//                 this.ai.y,
//                 this.ai.width,
//                 this.ai.height
//             );

//             //Dibuja la pelota
//             if (pong._turnDelayIsOver.call(this)) {
//                 this.context.fillRect(
//                     this.ball.x,
//                     this.ball.y,
//                     this.ball.width,
//                     this.ball.height
//                 );

//             }


//             //Dibuja la red (Linea divisora en medio de la pista)

//             this.context.beginPath();
//             this.context.setLineDash([7, 15]);
//             this.context.moveTo((this.canvas.width / 2), this.canvas.height - 140);
//             this.context.lineTo((this.canvas.width / 2), 140);
//             this.context.lineWidth = 10;
//             this.context.strokeStyle = '#ffffff';
//             this.context.stroke();

//             //Setea por dfecto las fuentes del canvas y lo alinea todo al centro
//             this.context.fon = '100px Courier New';
//             this.context.textAlign = 'center';

//             //Dibuja el score del jugador (left)
//             this.context.fillText(
//                 this.player.score.toString(),
//                 (this.canvas.width / 2) - 300,
//                 200
//             )
            


//             //dibuja el score de la IA (right)
//             this.context.fillText(
//                 this.ai.score.toString(),
//                 (this.canvas.width / 2) + 300,
//                 200
//             );

//             //Cambia la fuente del score central
//             this.context.font = '30px Courier New';

//             //Dibuja el score ganador (center)
//             this.context.fillText(
//                 'Round ' + (pong.round + 1),
//                 (this.canvas.width / 2),
//                 35
//             );

//             //Cambia la font size del valor del centro del score
//             this.context.fon = '40px Courier';

//             //Dibuja el numero de ronda actual
//             this.context.fillText(
//                 rounds[pong.round] ? rounds[pong.round] : rounds[pong.round -1],
//                 (this.canvas width / 2),
//                 100
//             )

//             }

//         }
//  }          
// loop: function () {
//     pong.update();
//     pong.draw()

//     //Si el juego no esta acabado, dibuja el siguiente encuadre.
//     if(!pong.over) requestAnimationFrame(pong.loop);

// },
// listen: function () {
//     document.addEventListener('keydow', function (key){
//         //Maneja la funcion del 'Press any key to begin' y se encarga de iniciar el juego.
//         if(pong.running === false) {
//             pong.running = true;
//             window. requestAnimationFrame(pong.loop);

//         }

//         //Maneja los eventos del movimiento hacia arriba que realizamos con la tecla W
//         if (key.keyCode === 38 || key.keyCode === 87) pong.player.move = direction.up;

//         //Maneja el movimiento hacia abajo que realizamos con la tecla S
//         if (key.keyCode === 40 || key.keyCode == 83) pong.player.move = direction.down;
//     });

// //Detiene al jugador de moverse cuando no se esta pulsando ninguna tecla.
// document.addEventListener('keyup', function (key) {
//     pong.player.move = direction.idle;
// })

// //Resetea la localizacion de la pelota, el turno del jugador, y setea un delay antes de la siguiente ronda empiece.
// _resetTurn: function (victor, loser) {
//     this.ball = ball.new.call(this, this.ball.speed);
//     this.turn = loser;
//     this.timer = (new Date()).getTime();

//     victor.score+;
// }

// //Espera a que un delay suceda entre cada turno.
// _turnDelayIsOver: function() {
//     return ((newDate()).getTime() - this.timer >= 1000);
// } 

// //Selecciona un color aleatorio y lo establece como background de cada nivel/ronda
// _generateRoundColor: function () {
//     let newColor = colors[Math.floor(Math.random() * colors.length)];
//     if (newColor === this.color) return pong._generateRoundColor();
//     return newColor;
// }


// }


// let pong = object.assign({}, game);
// pong.initialize();

// }

}

//Pintamos el template

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();

}