const quizData = [
    {
        question: "Q1.Which function of array object call fun. for each element?",
        a: "foreach()",
        b: "every()",
        c: "forEvery() ",
        d: "each()",
        correct: "a",
    },
    {
        question: "Q2.How can a datatype be declared to be a constant type?",
        a: "var",
        b: "Const",
        c: "let",
        d: "None of the above",
        correct: "b",
    },
    {
        
        question: " Q3.Which was the first browser to support JavaScript___?",
        a: "Netscape ",
        b: "Mozilla ",
        c: "IE ",
        d: "Google chorme",
        correct: "a",
    },
    {
        question: "Q4. Which of the following is not the JavaScriopt operator?",
        a: "new",
        b: "delet",
        c: "this",
        d: "typeof operator",
        correct: "c",
    },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;


const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">Play Again</button>
` // location.reload() won't work in CodePen for security reasons;
        }
    }
});
