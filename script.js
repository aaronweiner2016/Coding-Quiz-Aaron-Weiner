
var timeEl = document.querySelector("#timer");
var start = document.querySelector("#start-btn");
var next = document.querySelector("#next-btn");
var qContainer = document.querySelector("#questions-container");
var shuffledQuestions, currentQuestionIndex;
var questionElement = document.getElementById("questions");
var answersButtonElement = document.querySelector(".answers");
var retakeQuizBtn = document.querySelector("#retake-quiz");
var secondsLeft = 100;

var answer1 = document.querySelector("#one");
var answer2 = document.querySelector("#two");
var answer3 = document.querySelector("#three");
var answer4 = document.querySelector("#four");

var arrOfAnswers = [answer1, answer2, answer3, answer4];

function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Seconds Left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    };
    if(secondsLeft === 0){
      qContainer.classList.add("hide");
      next.classList.add("hide");
      highScoresList.classList.remove("hide");
      retakeQuizBtn.classList.remove("hide");
      viewHighScores()
      // retakeQuiz()
    };
  }, 1000);
}

start.addEventListener("click", init);
next.addEventListener("click", setNextQuestion);


function init() {
  setTime();
  startGame();
}

// function retakeQuiz() {
//   retakeQuizBtn.addEventListener("click", startGame);

// }

function startGame() {
    start.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    qContainer.classList.remove("hide");
    next.classList.remove("hide");
    setNextQuestion();
      
}

function setNextQuestion() {
   
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText  = question.question;
  for (var i = 0; i< arrOfAnswers.length; i++){
    arrOfAnswers[i].innerText = question.answers[i].text
  }

}

function selectAnswer() {
  
}

var highScores = document.getElementById("high-score");
highScores.addEventListener("click", viewHighScores);
highScoresList = document.getElementById("high-score-box");

function viewHighScores() {
    start.classList.add("hide");
    qContainer.classList.add("hide");
    highScoresList.classList.remove("hide");
}

var questions = [
  {
    question: "What is a boolean?",
    answers: [
      { text: "A True or False Statement", correct: true },
      { text: "A Variable", correct: false },
      { text: "A Number", correct: false },
      { text: "A Function", correct: false }
    ]
  }, {
    question: "What is a String?",
    answers: [
      { text: "A True or False Statement", correct: true },
      { text: "A Variable", correct: false },
      { text: "A Number", correct: false },
      { text: "A Function", correct: false }
    ]
  }, {
    question: "What is a Undefined Variable?",
    answers: [
      { text: "A True or False Statement", correct: true },
      { text: "A Variable", correct: false },
      { text: "A Number", correct: false },
      { text: "A Function", correct: false }
    ]
  }, {
    question: "How do you grab an ID?",
    answers: [
      { text: "A True or False Statement", correct: true },
      { text: "A Variable", correct: false },
      { text: "A Number", correct: false },
      { text: "A Function", correct: false }
    ]
  }
]