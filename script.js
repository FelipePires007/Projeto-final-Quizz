const perguntas = [
    "Qual é o nome do dono da vila?" ,
    "Quem é o personagem que sempre diz 'isso, isso, isso!' ?" ,
    "Qual o nome do professor ?" ,
    "Qual é a comida favorita do Quico?" ,
    "O que o chaves diz quando fica nervoso?"
] ;
const alternativas = [
    ["Sr. Barriga", "Seu Madruga", "Chiquinha", "Prof. Girafales"],
    ["Seu Madruga", "Chaves", "Chiquinha", "Nhonho"],
    ["Prof. Girafales", "Sr. Barriga", "Chiquinha", "Seu Madruga"],
    ["Sanduíche de presunto", "Bolo de chocolate", "Torta de frango", "Sanduíche de presunto e leite"],
    ["Foi sem querer querendo", "Isso, isso, isso!", "Tá tá tá!", "Que que foi, que que foi, que que há!"]
];

function startQuiz() {
    let score = 0;


    for (let i = 0; i < questions.length; i++) {
        const userAnswer = prompt(questions[i] + "\n" + answers[i].join(", "));


        if (!userAnswer || userAnswer.toLowerCase() !== answers[i][0].toLowerCase()) {
            endQuiz(score);
            return;
        } else {
            score++;
        }
    }
function endQuiz(score) {
    alert(`Que pena! Você errou uma pergunta. Seu placar final é: ${score} de ${questions.length}`);
    }
    
    
    endQuiz(score);
}
