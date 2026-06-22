const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Marine Language", correct: false },
            { text: "Hole Tools Markup Language", correct: false },
            { text: "Hyper Text Main Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false },
            { text: "C", correct: false }
        ]
    },
    {
        question: "Which is used for web interactivity?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "SQL", correct: false },
            { text: "C", correct: false }
        ]
    },

    {
        question: "Who created Java programming language?",
        answers: [
            { text: "James gosling",correct:true},
            {text: "Rayan gosling",correct:false},
            {text: "Jack rosling",correct:false},
            {text: "Rajini kanth",correct:false}
        ]
    },


    {
        question: "Who is the PM of USA?",
        answers: [
            { text: "James gosling",correct:false},
            {text: "MODI",correct:false},
            {text: "Donald duck",correct:false},
            {text: "Donald trump",correct:true}
        ]
    },

    {
        question: "Who are you?",
        answers: [
            { text: "James gosling",correct:false},
            {text: "Rayan gosling",correct:false},
            {text: "Jack rosling",correct:false},
            {text: "James Bond",correct:true}
        ]
    },

    {
        question: "Who am I?",
        answers: [
            { text: "James gosling",correct:false},
            {text: "Rayan gosling",correct:false},
            {text: "Jack rosling",correct:false},
            {text: "Vishal",correct:true}
        ]
    },

    {
        question: "Who am I?",
        answers: [
            { text: "James gosling",correct:false},
            {text: "Rayan gosling",correct:false},
            {text: "Jack rosling",correct:false},
            {text: "Vishal",correct:true}
        ]
    },

    {
        question: "Who am I?",
        answers: [
            { text: "James gosling",correct:false},
            {text: "Rayan gosling",correct:false},
            {text: "Jack rosling",correct:false},
            {text: "Vishal",correct:true}
        ]
    },

    {
        question: "Who am I?",
        answers: [
            { text: "James gosling",correct:false},
            {text: "Rayan gosling",correct:false},
            {text: "Jack rosling",correct:false},
            {text: "Vishal",correct:true}
        ]
    }
];

const questionElement = document.getElementById("question");

const answerButtons = document.querySelector(".options");

const nextButton = document.getElementById("next-btn");

const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option-btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectChoice);
    });
}
function resetState() {
    nextButton.style.display = "none";
    restartButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectChoice(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
 
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => 
        {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    restartButton.style.display = "flex";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
restartButton.addEventListener("click", startQuiz);