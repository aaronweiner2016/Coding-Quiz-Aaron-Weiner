var question = [
    {
        questions: "iksfahsdfn",
        answers: [
            {text: "kjsdbf", correct: true},
            {text: "kjsdfk", correct: false},
            {text: "kjsdnb", correct: false},
            {text: "kjsdfd", correct: false}
        ]
    },{
        questions: "iksfahsdfn",
        answers: [
            {text: "kjsdbf", correct: true},
            {text: "kjsdfk", correct: false},
            {text: "kjsdnb", correct: false},
            {text: "kjsdfd", correct: false}
        ]
        
    },{
        questions: "iksfahsdfn",
        answers: [
            {text: "kjsdbf", correct: true},
            {text: "kjsdfk", correct: false},
            {text: "kjsdnb", correct: false},
            {text: "kjsdfd", correct: false}
        ]
    },{
        questions: "iksfahsdfn",
        answers: [
            {text: "kjsdbf", correct: true},
            {text: "kjsdfk", correct: false},
            {text: "kjsdnb", correct: false},
            {text: "kjsdfd", correct: false}
        ]
    },{
        questions: "iksfahsdfn",
        answers: [
            {text: "kjsdbf", correct: true},
            {text: "kjsdfk", correct: false},
            {text: "kjsdnb", correct: false},
            {text: "kjsdfd", correct: false}
        ]
    },{
        questions: "iksfahsdfn",
        answers: [
            {text: "kjsdbf", correct: true},
            {text: "kjsdfk", correct: false},
            {text: "kjsdnb", correct: false},
            {text: "kjsdfd", correct: false}
        ]
    }
]

var timeEl = document.querySelector("#timer");
var start = document.querySelector("#start-btn");
var qContainer = document.querySelector("#questions-container");
var shuffledQuestions, currentQuestionIndex;
var questionElement = document.getElementById("questions");
var answersButtons = document.querySelector(".answers");
var secondsLeft = 100;

function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Seconds Left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
      sendMessage();
    }

  }, 1000);
}

start.addEventListener("click", setTime);

var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random - .5);
    currentQuestionIndex = 0;
    qContainer.classList.remove("hide");
    setNextQuestions()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
    questionElement.innerText = questions.questions
}

function selectAnswer() {

}

