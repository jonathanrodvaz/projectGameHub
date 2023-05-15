//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Quiz.css"

//Creamos función template

const template = () => `
    <div class='app'>
        <h1>Bienvenido al Poke-Quiz!</h1>
        <div class='quiz'>
        <h2 id='question'>Question goes here</h2>
        <div id='answer-buttons'>
            <button class='btn'>Answer 1</button>
            <button class='btn'>Answer 2</button>
            <button class='btn'>Answer 3</button>
            <button class='btn'>Answer 4</button>
        </div>
        <button id='next-btn'>Next</button>
        </div>
    </div>
        `



      


const addListener = () =>{
 const questions = [
    {
        question: 'Cuantos Pokemon del tipo venenoso existen?',
        answers: [
            {text: 'Existen 18 Pokemon del tipo Venenoso', correct: false},
            {text: 'Existen 14 Pokemon del tipo Venenoso', correct: true},
            {text: 'Existen 5 Pokemon del tipo Venenoso', correct: false},
            {text: 'Existen 12 Pokemon del tipo Venenoso', correct: false},
        ]
    },
    {
        question: 'Cual es el Pokemon más alto?',
        answers: [
            {text: 'Onix', correct: true},
            {text: 'Dragonair', correct: false},
            {text: 'Mewtwo', correct: false},
            {text: 'Gyarados', correct: false},
        ]
    },
    {
        question: 'Antes de aparecer en Pokemon, este Pokemon se ganaba la vida como mascota oficial de La Gula Del Norte. ¿A que Pokemon nos referimos...?',
        answers: [
            {text: 'Tentacool', correct: false},
            {text: 'Gobi', correct: false},
            {text: 'Mr-Mime', correct: false},
            {text: 'Tangela', correct: true},
        ]
    },
    {
        question: 'Que entrañable Pokemon es conocido por no distanciarse de su querido puerro?',
        answers: [
            {text: 'Slowbro', correct: false},
            {text: 'Farfetchd', correct: true},
            {text: 'Jinx', correct: false},
            {text: 'Kadabra', correct: false},
        ]
    },
 ];

 const questionElement = document.getElementById('question');
 const answerButtons = document.getElementById('answer-buttons');
 const nextButton = document.getElementById('next-btn');

 let currentQuestionIndex = 0;
 let score = 0;

 //Funcion que, al comenzar el quiz, reseteará el score.
 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();

 }

 function showQuestion(){
    resetState();
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })

}


//Esta funcion elimina las respuestas anteriores de la pregunta anterior. 
function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        //Esta linea de abajo permite que se añada un punto al score si la respuesta seleccionada es correcta.
        score++;
         }else{
            selectedBtn.classList.add('incorrect');
         }

         //Las siguientes lineas de codigo sirven para señalar la respuesta correcta cuando se ha escogido la respuesta incorrecta
         Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === 'true'){
                button.classList.add('correct')
            }
            //Esta linea evita que pulses los botones correspondientes a otras respuestas una vez ya has escogido la respuesta. Así, evita que una vez escogida la respuesta puedas seleccionar otras respuestas. 
            button.disabled = true;
         })
         //Esta linea permite mostrar el botón de siguiente pregunta una vez se ha escogido una respuesta en la pregunta actual.
         nextButton.style.display = 'block';

}
//Esta función nos mostrará el score total con un mensaje personalizado en función del score. 
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again!';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


//Las siguientes lineas de codigo son el escuchador de eventos para la funcionalidad del botón next, que permite continuar a la siguiente pregunta (una vez se ha escogido la pregunta correcta.)
nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    //Este else permite que tras la ultima pregunta respondida, si pulsamos Next reseteamos el quiz.
    }else{
        startQuiz();
    }
})

startQuiz();

}

//Pintamos el template

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
 addListener();
}