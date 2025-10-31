const questions = [
  {
    question: "Which language is used for web page markup?",
    choices: ["Python", "CSS", "HTML", "Java"],
    correct: 2,
  },
  {
    question:
      "How many bytes are there in one kilobyte (according to the standard computer definition)?",
    choices: ["1000", "1024", "1200", "2048"],
    correct: 1,
  },
  {
    question: "What does CSS do?",
    choices: [
      "Adds behavior",
      "Defines style and layout",
      "Processes data on the server",
      "Stores a database",
    ],
    correct: 1,
  },
  {
    question: "Which tag is used for the first-level heading in HTML?",
    choices: ["<head>", "<h1>", "<title>", "<header>"],
    correct: 1,
  },
];

const questionText = document.getElementById("questionText");
const choicesList = document.getElementById("choicesList");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const restartBtn2 = document.getElementById("restartBtn2");
const scoreMeta = document.getElementById("scoreMeta");
const progBar = document.getElementById("progBar");
const resultArea = document.getElementById("resultArea");
const questionArea = document.getElementById("questionArea");
const finalScores = document.getElementById("finalScore");
const totalQ = document.getElementById("totalQ");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function showQuestion() {}
