//Importamos los estilos de la hoja de estilos correspondiente. 
import "./Quiz.css"

//Creamos función template

const template = () => `
    <div class='app'>
        <h1>Simple Quiz</h1>
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
        question: 'Which is the largest animal in the world?',
        answers: [
            {text: 'Shark', correct: false},
            {text: 'Blue Whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
        ]
    },
    {
        question: 'Which is the smallest country in the world?',
        answers: [
            {text: 'Vatican City', correct: true},
            {text: 'Bhutan', correct: false},
            {text: 'Nepal', correct: false},
            {text: 'Shri Lanka', correct: false},
        ]
    },
    {
        question: 'Which is the largest desert in the world?',
        answers: [
            {text: 'Kalahari', correct: false},
            {text: 'Gobi', correct: false},
            {text: 'Sahara', correct: false},
            {text: 'Antarctica', correct: true},
        ]
    },
    {
        question: 'Which is the smallest continent in the world?',
        answers: [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
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
         }else{
            selectedBtn.classList.add('incorrect');
         }

}


startQuiz();

}

//Pintamos el template

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
 addListener();
}