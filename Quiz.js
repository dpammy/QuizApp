
:root {
    background-color: #ecf5ff;
    font-size: 62.5%;
}

*{
box-sizing: border-box
font-family; Arial, Helvetica, sans-serif;
margin: 0;
padding: 0;
color: #333;
}

h1,
h2,
h3,
h4 {
    margin-bottom: 1rem;
}
h1 {
    font-size: 5.4rem;
    color: #56a5eb;
    margin-bottom: 5rem;
}

h1 > span {
    font-size: 2.4rem;
    font-weight: 500;
}

h2 {
    font-size: 4.2rem;
    margin-bottom: 4rem;
    font-weight: 700;
}

h3 {
    font-size: 2.8rem;
    font-weight: 500;
}

.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
}

.container > * {
    width: 100%vw;
    }

.flex-column{
display: flex;
flex-direction: column;
}

.flex-center{
    justify-content: center;
    align-items: center;
}

.justify-center{
    justify-content: center;
}

.text-center{
text-align: center;
}

.hidden{
    display: none;
}

.btn {
    font-size: 1.8rem;
    padding: 1rem 0;
    width: 20rem;
    text-align: center;
    border: 0.1rem solid #56a5eb;
    margin-bottom: 1rem;
    text-decoration: none;
    color: #56a5eb;
    background-color: white;
}

.btn:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
}

.btn[disabled]: hover {
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
}







































<div id="quiz"</id>
            <button id="submit">Submit Quiz</button> 
            <div id="results"></div>




<div class="container">
<div id="quiz"</id>
    <button id="submit">Submit Quiz</button> 
    <div id="results"></div>

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    <h1>Quick quiz</h1>
<a class "btn"href */game.html*>play</a>
<a class "btn"href */highscores.html*>play</a>




function buildQuiz(){}
function showResults(){}
//display quiz right away
buildQuiz();
// on submit, show results
submitButton.addEventListener('Click',showResults);

const myQuestions = [
{
    question: "HTML stands for-",
    answers: {
        a: "HighText Machine Language"
        b: "HyperText an links Markup Language"
        c: "HyperText Markup language"
        d: "None of these"
    },
    correctAnswer: "c"
},
{
    question: "Which one of these is a JavaScript package manager?",
answer:{
    a: "Node.js",
    b: "TypeScript",
    c: "npm"
    d: "Classes"
},
correctAnswer: "c"
},
{

    question: "The correct sequence of HTML tags for starting a webpage is-",
answers: {
    a. "Head, Title, HTML, body",
    b. "HTML, body, Title, Head",
    c. "Head, Title, HTML, body", 
    d. "HTML, Head, Title, body", 
    },
correctAnswer: "d"
},
{

question: "Which character is used to represent the closing of a tag in HTML?",
answer: {
a.  "\",
b. "!",
c. "/",
d.  ".",
},
correctAnswer: "c"
},
{
  
    question: "How to add a background color in HTML?",
    answer: {
    a. "<marquee bg color: “red”>"
    b. "<marquee bg-color = “red”>"
    c. "<marquee bgcolor = “red”>"
    d. "<marquee color = “red”>"
    },
    correctAnswer: "c"
}
];
function buildQuiz(){
const output = [];
myQuestions.forEach(
    (currentQuestion, questionnumber) => {
const answers = [];
for(letter in currentQuestion.answers){
    answers.push( 
        <label>
            <input type= "raio" name= "question${questionNumber}"value="${letter}">
${letter}:
${correntQuestion.answers[letter]}
</label>
    );
}

output.push(
    <div class = "question"> ${currentQuestion.question}</div>
    <div class = "answers"> $ {answers.join('')}</div>
);
}
);
quizContainer.innerHTML = output. join('');
}

myQuestions.forEach( (currentQuestion, questionNumber) => {
});

const answers = [];
for (letter in currentQuestion.answers){

    answers.push(
        <label>
            <input type = "radio" name= "question${questionNumber}"value="${letter}">
            ${letter}:
            ${currentQuestion.answers[letter]}
            </label>
    );
        }
<output.push(
    <div class = "question"> ${currentQuestion.question}</div>
    <div class= "answers">${answers.join('')}</div>
):
quizContainer.innerHTML = output.join('');

function builQuiz(){...}
function showResults(){...}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [...];

builQuiz();
submitButton.addEentListener('click', showResults);

function showResults(){
const answerContainers = quizContainer. querySelectorAll('.answers');
let numCorrect = 0;

myQuestions. forEach((currentQuestion, questionNumber) => {
    const answerContainer =answerContainers[questionNumber];
    const selector = 'input[name=question${questionNumber}]:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {} ). value;

    numCorrect++;

    answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
        answerContainers[questionNumber].style.color = 'red';
    }
});
resultsContainer.innerHTML = '${numCorrect} out of $ {myQuestions.length}';
}

const answerContainers = quizContainer.querySelectorAll('.answers');
let numCorrect = 0;



myQuestions.forEach((currentQuestion, questionNumber) =>{
const answerContainer = answerContainers[questionNumber];
const selector = 'input[name=question${questionNumber}]:checked';
const userAnswer = (answerContainer . quuerySelector(selector) || {}). value;

if(userAnswer === currentQuestion.correctAnswer){
    numCorrect++;
    answerContainers[questionNumber].style.color = 'lightgreen';
}
else{
    answerContainers[questionNumber].style.color = 'red';
}
});
resultsContainer.innerHTML = '${numCorrect} out of ${'myQuestions.length}';
}

const answerContainers = quizContainer.querySelectorAll('.answers');
let numCorrect = 0;

myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question${questionNumber}]:checke';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
        answerContainers[questionNumber].style.color = 'red';
    }
});