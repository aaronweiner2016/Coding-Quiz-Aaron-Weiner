
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
var backCorrect = document.querySelector("body");
var scoreTime = document.querySelector("#score-time");
var score = localStorage.getItem("score");
var highScoreLeftCrn = document.querySelector("#high-score");
var inputSection = document.querySelector("#input-section");
var h2 = document.querySelector("h2");


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
      highScoresList.classList.remove("hide");
      retakeQuizBtn.classList.remove("hide");
      qContainer.classList.add("hide");
      highScoreLeftCrn.classList.add("hide");
      timeEl.classList.add("hide");
      viewHighScores()
    };
  }, 1000);
}

arrOfAnswers.forEach(btn => {
  btn.addEventListener("click", selectAnswer)
});

function init() {
  setTime();
  startGame();
}

retakeQuizBtn.addEventListener("click", retakeQuiz);

function retakeQuiz() {
  location.reload();
}

goBackBtn.addEventListener("click", goBack);

function goBack() {
  location.reload();
}

start.addEventListener("click", init);

function startGame() {
  start.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  qContainer.classList.remove("hide");
  setNextQuestion();
}

  // Line 84 through 117 have to do with my questions and answers
    // Questions sections 


function setNextQuestion() {
  if(currentQuestionIndex < questions.length){
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }else{
    clearInterval(timerInterval)
    viewHighScores()
    scoreTime.textContent = score;
    retakeQuizBtn.classList.remove("hide");
    goBackBtn.classList.add("hide");
    timeEl.classList.add("hide");
  }
}

function showQuestion(question) {
  questionElement.innerText  = question.question;
  for (var i = 0; i < arrOfAnswers.length; i++){
    arrOfAnswers[i].innerText = question.answers[i].text
    arrOfAnswers[i].setAttribute("data-correct", question.answers[i].correct)
  }
}

    // Answer selection function 

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

    // Functions that have to do with my high score sections

var highScores = document.getElementById("high-score");
highScores.addEventListener("click", highScoreButton);

function highScoreButton() {
  start.classList.add("hide");
  qContainer.classList.add("hide");
  inputSection.classList.add("hide");
  retakeQuizBtn.classList.add("hide");
  h2.classList.add("hide");
  goBackBtn.classList.remove("hide");
  highScoresList.classList.remove("hide");
}


var highScoresList = document.getElementById("high-score-box");

function viewHighScores() {
  start.classList.add("hide");
  qContainer.classList.add("hide");
  highScoresList.classList.remove("hide");
  goBackBtn.classList.remove("hide");
  score = secondsLeft;
  localStorage.setItem("score", score);
}


// High Score inputting and storing

var nameInput = document.querySelector("#name");
var scoresArray = [];
var listedScores = document.querySelector("#list-scores-name");
var submitScore = document.querySelector("#submit-score");



function initScores() {
  var storedScores = JSON.parse(localStorage.getItem("scoresArray"));

  if(storedScores !== null){
    scoresArray = storedScores;
  }
  renderScores();
}

function renderScores() {
  listedScores.innerHTML= "";
  
  for(var i = 0; i < scoresArray.length; i++){
    var scoreItem = scoresArray[i];
    
    var li = document.createElement("li");
    li.textContent = scoreItem;
    li.setAttribute("data-index", i); 
    
    listedScores.appendChild(li);    
  }
}

function storeScores() {
  localStorage.setItem("scoresArray", JSON.stringify(scoresArray));
}

submitScore.addEventListener("click", function(event){
  event.preventDefault();
  var scoreText = nameInput.value.trim();
  var concatScore = scoreText.concat(score);
  scoresArray.push(concatScore);
  nameInput.value = "";
  
  storeScores();
  renderScores();
});
initScores()


// Object of questions and answers

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