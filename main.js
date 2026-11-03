const quiz = [
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Hamburg", "München", "Berlin", "Hannover"],
    correct: "Berlin",
  },
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: ["Paris", "Lyon", "Nizza", "Bordeaux"],
    correct: "Paris",
  },
  {
    question: "Was ist die Hauptstadt von Italien?",
    answers: ["Florenz", "Neapel", "Mailand", "Rom"],
    correct: "Rom",
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    answers: ["Barcelona", "Valencia", "Madrid", "Sevilla"],
    correct: "Madrid",
  },
];
let currentQuestion = 0;

const mainDiv = document.createElement("div");
mainDiv.classList.add("main-Div");

const h1Div = document.createElement("div");
mainDiv.appendChild(h1Div);
h1Div.classList.add("question");
const h1 = document.createElement("h1");
h1Div.appendChild(h1);
h1.textContent = quiz[currentQuestion].question;

const btnDiv = document.createElement("div");
mainDiv.appendChild(btnDiv);
btnDiv.classList.add("question-btn");

function renderQuestion() {
  h1.textContent = quiz[currentQuestion].question;
  for (let i = 0; i < quiz[currentQuestion].answers.length; i++) {
    const button = document.createElement("button");
    btnDiv.appendChild(button);
    button.textContent = quiz[currentQuestion].answers[i];
    button.classList.add("btn");
    button.onclick = function () {
     
      if (button.textContent === quiz[currentQuestion].correct) {
        button.classList.add("correct");
        alert("Deine Antwort ist Richtig !");
      } else {
        alert("Deine Antwort ist Falsch !");
        button.classList.add("wrong");
        for (let i = 0; i < btnDiv.children.length; i++) {
          const currentButton = btnDiv.children[i];
          if (currentButton.textContent === quiz[currentQuestion].correct) {
            currentButton.classList.add("correct");
          }
        }
      }
    };
  }
}
renderQuestion();
const btnFooterDiv = document.createElement("div");
mainDiv.appendChild(btnFooterDiv);
btnFooterDiv.classList.add("footer-btn");
const buttonSolution = document.createElement("button");
btnFooterDiv.appendChild(buttonSolution);
buttonSolution.textContent = "Lösung";
buttonSolution.onclick = function () {
  for (let i = 0; i < btnDiv.children.length; i++) {
    const currentButton = btnDiv.children[i];
    if (currentButton.textContent === quiz[currentQuestion].correct) {
      currentButton.classList.add("correct");
    }
  }
};

const buttonContinue = document.createElement("button");
btnFooterDiv.appendChild(buttonContinue);
buttonContinue.textContent = "Weiter";
buttonContinue.onclick = function nextQuestion() {
  currentQuestion = Math.floor(Math.random() * quiz.length);

  btnDiv.innerHTML = "";
  renderQuestion();
};

const element = document.getElementById("body");
element.appendChild(mainDiv);


