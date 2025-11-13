'use strict';

const questions = [
  {
    question: "Який тип поні несе відповідальність за погоду та є втіленням Елемента Вірність?",
    choices: ["Єдинорог", "Земні поні", "Алікорни", "Пегаси"],
    correct: 3,
  },
  {
    question: "Як звати дракона-помічника Твайлайт Спаркл?",
    choices: ["Спайк", "Джон", "Лондон", "Пуер"],
    correct: 0,
  },
  {
    question: "Яка поні відповідає за організацію вечірок та є втіленням Елемента Сміх?",
    choices: ["Пінкі Пай", "Раріті", "Іскорка", "Рейнбоудеш"],
    correct: 0,
  },
  {
    question: "Як звуть молодшу сестру Епплджек?",
    choices: ["Еплкава", "Еплгруша", "Еплблум", "Еплавер"],
    correct: 2,
  },
  {
    question: "Яка цільова аудиторія My little pony?",
    choices: ["Замужні жінки", "Молоді дівчата", "Чоловіки віком до 30", "всі варіанти правильні"],
    correct: 3,
  },
  {
    question: "Хто з чотирьох принцес-алікорнів відповідає за підняття Сонця?",
    choices: ["Принцеса Луна", "Принцеса Каденс", "Принцеса Селестія", "Принцеса Твайлайт"],
    correct: 2,
  },
];

const questionText = document.getElementById("questionText");
const choicesList = document.getElementById("choicesList");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const restartBtn2 = document.getElementById("restartBtn2");
const scoreMeta = document.getElementById("scoreMeta");
const resultArea = document.getElementById("resultArea");
const questionArea = document.getElementById("questionArea");
const finalScores = document.getElementById("finalScores");
const totalQ = document.getElementById("totalQ");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  choicesList.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.classList.add("choice");
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(index));
    choicesList.appendChild(btn);
  });
  nextBtn.disabled = true;
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    if (i === index && i !== q.correct) btn.classList.add("wrong");
  });
  if (index === q.correct) score++;
  scoreMeta.textContent = `Points: ${score}`;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionArea.style.display = "none";
  resultArea.style.display = "block";
  finalScores.textContent = score;
  totalQ.textContent = questions.length;
}

// 🟢 Спільна функція для обох кнопок рестарту
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreMeta.textContent = `Points: ${score}`;
  resultArea.style.display = "none";
  questionArea.style.display = "block";
  showQuestion();
}

// Обидві кнопки працюють:
restartBtn.addEventListener("click", restartQuiz);
restartBtn2.addEventListener("click", restartQuiz);

showQuestion();
