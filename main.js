const quiz = [
 {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Hamburg", "München", "Berlin", "Hannover"],
    correct: "Berlin"
  },
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: ["Paris", "Lyon", "Nizza", "Bordeaux"],
    correct: "Paris"
  },
  {
    question: "Was ist die Hauptstadt von Italien?",
    answers: ["Florenz", "Neapel", "Mailand", "Rom"],
    correct: "Rom"
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    answers: ["Barcelona", "Valencia", "Madrid", "Sevilla"],
    correct: "Madrid"
  }
];

let currentQuestion = 0;

const mainDiv = document.createElement("div");
mainDiv.classList.add("main-Div");

//h1
const h1Div = document.createElement("div");
mainDiv.appendChild(h1Div);
h1Div.classList.add("question");
const h1 = document.createElement("h1");
h1Div.appendChild(h1);
h1.textContent =quiz[currentQuestion].question ;

//Btn
const btnDiv = document.createElement("div");
mainDiv.appendChild(btnDiv);
btnDiv.classList.add("question-btn");

const button1 = document.createElement("button");
btnDiv.appendChild(button1);
button1.textContent = quiz[currentQuestion].answers[0];
button1.classList.add("btn");

const button2 = document.createElement("button");
btnDiv.appendChild(button2);
button2.textContent = quiz[currentQuestion].answers[1];
button2.classList.add("btn");

const button3 = document.createElement("button");
btnDiv.appendChild(button3);
button3.textContent = quiz[currentQuestion].answers[2];
button3.classList.add("btn");

const button4 = document.createElement("button");
btnDiv.appendChild(button4);
button4.textContent = quiz[currentQuestion].answers[3];
button4.classList.add("btn");

//btn Footer
const btnFooterDiv = document.createElement("div");
mainDiv.appendChild(btnFooterDiv);
btnFooterDiv.classList.add("footer-btn");

const buttonSolution = document.createElement("button");
btnFooterDiv.appendChild(buttonSolution);
buttonSolution.textContent = "Lösung";

const buttonContinue = document.createElement("button");
btnFooterDiv.appendChild(buttonContinue);
buttonContinue.textContent = "Weiter";

const element = document.getElementById("body");
element.appendChild(mainDiv);

console.log(mainDiv);
