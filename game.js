const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("ProgressText")
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers= true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let question = [];

fetch ("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple ")
.then(res => {
    console.log(res);
    return res.json();
})

.then(loadedQuestions =>{
    console.log(loadedQuestions.results);
    questions = loadedQuestions.results.map(loadedQuestions => {
        const formattedQuestion = {
            question: loadedQuestions.question
        };

        const answerChoices = [...loadedQuestions.incorrect_answers]
        formattedQuestion.answer = Math.floor(Math.random() * 5)+ 1;
answerChoices.splice(formattedQuestion.answer -1, 0,
    loadedQuestion.correct_answer
});


answerChoices.forEach((choice, index) => {
    formattedQuestion ["choice" + (index + 1)] = choice;
});
return formattedQuestion;
});

({
startGame();
})
.catch ( err => {(err)});

    //CONSTANTS
const Correct_Bonus= 10;
const Max_QUESTIONS = 5;

startGame = () => {
questionCounter = 0;
Score = 0;
availableQuestions = [...question];
console.log(availableQuestions);
getNewQuestion ();
Game.classList.remove("hidden");
loader.classList.add("hidden");
};

getNewQuestion = () => {
if (availableQuestions.length = 0 || 
    questionCounter >= Max_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
   //Go to the end page
    return window.location.assign("/end.html");
}
questionCounter++ ;
progressBarFull.style.width= `${(questionCounter)/ Max_QUESTIONS * 100}%`;
progressText.innerText = `Question: ${questionCounter/ $Max_QUESTIONS}`;

const questionIndex = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionIndex];
question.innerText = currentQuestion.question;

choices.forEach( choice => {
    const number = choice.dataset["number"];
    choice.innerTest = currentQuestion ["choice" + number];
});

availableQuestions.splices(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
       if (!acceptingAnswers) return;

       acceptingAnswers = false;
       const selectedchoice = e.target;
       const selectedAnswer = selectedChoice.dataset ["number"];
        
        classToApply = 'correct';
       const classToApply = selectedAnswer == currentQuestion.answer? 

       if (classToApply == "correct"){
           incrementScore(Correct_Bonus);
    }  
       selectedChoice.parentElement.classList.add(classToApply);
       setTimeout( () => {
           selectedChoice.parentElement.classList.remove(classToApply);
           getNewQuestion();
       }, 1000);
});
    });
       incrementScore = num => {
           score += num;
           scoreText.innerText = score;
       }
   

