const quizData = [
    {
        question: " Q1. Inside which HTML element do we put the JavaScript ?",
        a: "script",
        b: "js",
        c: "scripting",
        d: "JavaScript",
        correct: "a",
    },
    {
        question: " Q2. Where is the correct place to insert a JavaScript ?",
        a: "Head section",
        b: "Both head and body section",
        c: "body",
        d: "none of the above",
        correct: "b",
    },
    {
        question: " Q3. How do you create a function in JavaScript ?",
        a: "function myfunction()",
        b: "function:myFunction()",
        c: "function =myfunction()",
        d: "myfunction()",
        correct: "a",
    },
    {
        question: "Q4. How do you call a function named ?",
        a: "call function myfunction()",
        b: "call myfunction()",
        c: "myfunction()",
        d: "none of the above",
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