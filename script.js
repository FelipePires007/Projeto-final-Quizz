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