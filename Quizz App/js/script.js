const questions = [
  {
    question: "Which is largest animal in the world?",
    answer: [
      { option: "Shark", correct: false },
      { option: "Blue Whale", correct: true },
      { option: "Elephant", correct: false },
      { option: "Girrafe", correct: false },
    ],
  },

  {
    question: "Which is smallest country in the world?",
    answer: [
      { option: "Vatician City", correct: true },
      { option: "Bhutan", correct: false },
      { option: "Nepal", correct: false },
      { option: "Shri Lanka", correct: false },
    ],
  },

  {
    question: "Which is largest desert in the world?",
    answer: [
      { option: "Kalahari", correct: false },
      { option: "Gobi", correct: false },
      { option: "Sahara", correct: false },
      { option: "Antartica", correct: true },
    ],
  },

  {
    question: "Which is smallest continent in the world?",
    answer: [
      { option: "Aisa", correct: false },
      { option: "Austrellia", correct: true },
      { option: "Arctic", correct: false },
      { option: "Africa", correct: false },
    ],
  },
];

let questionElement = document.getElementById("question");
let nextButton = document.getElementById("nextBtn");
let optionsList = document.getElementById("options");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  nextButton.innerText = "Next";

  quizShow();
}

function quizShow() {
  reset();
  let currentQuestion = questions[currentQuestionIndex];
  let currentQuestionNumber = currentQuestionIndex + 1;
  questionElement.innerText = `${currentQuestionNumber}. ${currentQuestion.question}`;

  currentQuestion.answer.forEach((ans) => {
    let button = document.createElement("button");
    button.innerHTML = ans.option;
    button.classList.add("btn");
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }

    button.addEventListener("click", selectItem);
    optionsList.appendChild(button);
  });
}

function reset() {
  nextButton.style.display = "none";
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function selectItem(e) {
  nextButton.style.display = "block";

  let selectedButton = e.target;
  let isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("inCorrect");
  }

  Array.from(optionsList.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
}

function showScore() {
  questionElement.innerHTML = `You score ${score} out of ${questions.length}`;

  reset();
  nextButton.style.display = "block";
  nextButton.innerHTML = "Restart";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    quizShow();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    nextQuestion();
  } else {
    startQuiz();
  }
});

startQuiz();
