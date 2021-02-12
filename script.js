
var timeEl = document.querySelector("#timer");
var start = document.querySelector("#start-btn");
var qContainer = document.querySelector("#questions-container");
var shuffledQuestions, currentQuestionIndex;
var questionElement = document.getElementById("questions");
var answersButtonElement = document.getElementById("answer-buttons");
var secondsLeft = 100;

function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Seconds Left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

start.addEventListener("click", setTime);

var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    qContainer.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion() {
   
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question, answers) {
    questionElement.innerText  = question.question;
    question.answers.forEach(answer =>{
      var button = document.createElement("button")
      buttton.innerText = answer.text
      button.classList.add("btn")
    })
}

function selectAnswer() {
  
}
var questions = [
    {
         question: "What is a boolean?",
         answers: [
             {text: "A True or False Statement", correct: true},
             {text: "A Variable", correct: false},
             {text: "A Number", correct: false},
             {text: "A Function", correct: false}
         ]
     }
 ]