
var timeEl = document.querySelector("#timer");
var start = document.querySelector("#start-btn");
var qContainer = document.querySelector("#questions-container");
var shuffledQuestions, currentQuestionIndex;
var questionElement = document.getElementById("questions");
var answersButtonElement = document.querySelector(".answers");
var retakeQuizBtn = document.querySelector("#retake-quiz");
var goBackBtn = document.querySelector("#go-back");
var secondsLeft = 100;
var timerInterval;
var scoreTime = document.querySelector("#score-time");
var score = localStorage.getItem("score");
var backCorrect = document.querySelector("body");




var answer1 = document.querySelector("#one");
var answer2 = document.querySelector("#two");
var answer3 = document.querySelector("#three");
var answer4 = document.querySelector("#four");

var arrOfAnswers = [answer1, answer2, answer3, answer4];



function setTime() {  
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent =  "Seconds Left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    };
    if(secondsLeft === 0){
      qContainer.classList.add("hide");
      highScoresList.classList.remove("hide");
      retakeQuizBtn.classList.remove("hide");
      viewHighScores()
    };
  }, 1000);
}


start.addEventListener("click", init);
retakeQuizBtn.addEventListener("click", retakeQuiz);
goBackBtn.addEventListener("click", goBack);


arrOfAnswers.forEach(btn => {
  btn.addEventListener("click", selectAnswer)
});

function init() {
  setTime();
  startGame();
}

function retakeQuiz() {
  location.reload();
}

function goBack() {
  location.reload();
}

function startGame() {
    start.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    qContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
  if(currentQuestionIndex < questions.length){
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }else{
    clearInterval(timerInterval)
    viewHighScores()
    scoreTime.textContent = score;
    retakeQuizBtn.classList.remove("hide");
    goBackBtn.classList.add("hide");
  }
}

function showQuestion(question) {
  questionElement.innerText  = question.question;
  for (var i = 0; i < arrOfAnswers.length; i++){
    arrOfAnswers[i].innerText = question.answers[i].text
    arrOfAnswers[i].setAttribute("data-correct", question.answers[i].correct)
  }
}



function selectAnswer(e) {
  if(e.target.dataset.correct === "true"){    
    backCorrect.setAttribute("style", "background-color: green;")
    currentQuestionIndex++;
    setNextQuestion()        
  }else{
    backCorrect.setAttribute("style", "background-color: red;")
    secondsLeft = secondsLeft - 10;
    currentQuestionIndex++;
    setNextQuestion()
  }
}

function correctColor() {
  answersButtonElement.setAttribute("style", "background-color: green;");
}



var highScores = document.getElementById("high-score");
highScores.addEventListener("click", viewHighScores);
highScoresList = document.getElementById("high-score-box");

function viewHighScores() {
    start.classList.add("hide");
    qContainer.classList.add("hide");
    highScoresList.classList.remove("hide");
    goBackBtn.classList.remove("hide");
    score = secondsLeft
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