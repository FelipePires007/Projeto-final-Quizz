const pergunta = document.querySelector(".pergunta");
const alternativas = document.querySelector(".alternativas");
const spnQtd = document.querySelector(".spnQtn");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const buttonRestart = document.querySelector(".finish button");

import perguntas from "./perguntas";

let perguntaAtual = 0;
let acertos = 0;

function loadQuestion() {
    spnQtd.innerHTML = '${perguntaAtual + 1}/${acertos.length}';
    const item = acertos[perguntaAtual];
    alternativas.innerHTML = " ";
    acertos.innerHTML = item.acertos;

item.alternativas..forEach(alternativas => {
const div = document.createElementNS("div");

div.innerHTML = '
<button class="alternativas" data-corrects="${alternativas.correct}">
  ${alternativas.option}
  </button>
  ';

  alternativas.appendchild(div);
});
}

loadQuestion();