

const mainDiv = document.createElement("div");

const h1 = document.createElement("h1");
mainDiv.appendChild(h1);
h1.textContent = "test";

const button1 = document.createElement("button")
mainDiv.appendChild(button1)
button1.textContent="antwort 1"

const button2 = document.createElement("button")
mainDiv.appendChild(button2)
button2.textContent="antwort 2"

const button3 = document.createElement("button")
mainDiv.appendChild(button3)
button3.textContent="antwort 3"

const button4 = document.createElement("button")
mainDiv.appendChild(button4)
button4.textContent="antwort 4"

const buttonSolution = document.createElement("button")
mainDiv.appendChild(buttonSolution)
buttonSolution.textContent="Lösung"

const buttonContinue = document.createElement("button")
mainDiv.appendChild(buttonContinue)
buttonContinue.textContent="Weiter"

const element = document.getElementById("body");
element.appendChild(mainDiv);

console.log(mainDiv);
