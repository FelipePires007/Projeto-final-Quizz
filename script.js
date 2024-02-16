const questions = [
    "Qual é o nome do dono da vila?",
    "Quem é o personagem que sempre diz 'Isso, isso, isso!'?",
    "Qual o nome do professor?",
    "Qual é a comida favorita do Quico?",
    "O que o Chaves diz quando fica nervoso?"
];

const answers = [
    ["Sr. Barriga", "Seu Madruga", "Chiquinha", "Prof. Girafales"],
    ["Seu Madruga", "Chaves", "Chiquinha", "Nhonho"],
    ["Prof. Girafales", "Sr. Barriga", "Chiquinha", "Seu Madruga"],
    ["Sanduíche de presunto", "Bolo de chocolate", "Torta de frango", "Pastel"],
    ["Foi sem querer querendo", "Isso, isso, isso!", "Tá tá tá!", "Que que foi, que que foi, que que há!"]
];

function startQuiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const userAnswer = prompt(questions[i] + "\n" + answers[i].join(", "));

        if (!userAnswer || !answers[i].includes(userAnswer.trim())) {
            endQuiz(score);
            return;
        } else {
            score++;
        }
    }

    if (score === questions.length) {
        alert("Parabéns! Você acertou todas as perguntas!");
    }

    endQuiz(score);
}

function endQuiz(score) {
    alert(`Que pena! Você errou uma pergunta. Seu placar final é: ${score} de ${questions.length}`);
}
