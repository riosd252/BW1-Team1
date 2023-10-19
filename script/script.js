/* MICRO TASKS
1) PASSARE DALLA HOME ALLE DOMANDE 
2) GENERARE DINAMICAMENTE LA SCHERMATA IN BASE AL TIPO DI DOMANDA (DOMANDA E OPZIONI)
3) IN CONTEMPORANEA DEVE PARTIRE IL TIMER
4) GENERARE DOMANDE SUCCESSIVE DOPO CHE L'UTENTE HA SCELTO UNA RISPOSTA
5) SALVATAGGIO DELLE RISPOSTE
6) 

*/

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

// VARIABILE PER LA REGISTRAZIONE DEL PUNTEGGIO
let studentScore = [];
let rightAnswers = 0;
let wrongAnswers = 0;

// VARIABILE "CONTATORE"
let questionNumber = 0;

// SELEZIONE DEL FORM, NECESSARIO PER L'ESECUZIONE DELLE FUNZIONI
const formNode = document.querySelector("form");

// FUNZIONI NECESSARIE PER GENERARE DINAMICAMENTE I PULSANTI:

// OPZIONE CORRETTA
const correctOption = function () {
  button = document.createElement("button");
  button.className = "btn";
  button.innerText = questions[questionNumber].correct_answer;
  formNode.appendChild(button);
};
// OPZIONI ERRATE
const incorrectOptions = function () {
  for (let i = 0; i < questions[questionNumber].incorrect_answers.length; i++) {
    button = document.createElement("button");
    button.className = "btn";
    button.innerText = questions[questionNumber].incorrect_answers[i];
    formNode.appendChild(button);
  }
};

// FUNZIONE PER CALCOLARE RISPOSTE GIUSTE E SBAGLIATE
const calcAnswers = function () {
  for (let i = 0; i < studentScore.length; i++) {
    if (studentScore[i] === 1) {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }
  }
};

// FUNZIONE PRINCIPALE, GENERA DINAMICAMENTE L'INTERA INTERFACCIA DEL QUIZ
const loadQuestion = function () {
  //SELEZIONE DEL TAG "h1" CONTENENTE LA DOMANDA E SUCCESSIVA ASSEGNAZIONE DEL TESTO
  const h1 = document.querySelector("h1");
  h1.innerText = questions[questionNumber].question;

  // TRIGGER FUNZIONI PRECEDENTEMENTE CREATE PER GENERARE I PULSANTI
  correctOption();
  incorrectOptions();

  // SELEZIONE DEL FOOTER E SUCCESSIVA ASSEGNAZIONE DEL TESTO INTERNO PER CONTEGGIO DOMANDE
  const footer = document.getElementsByClassName("counterNum")[0];
  footer.innerText = questionNumber + 1;
};

let totalSeconds = 60;

window.onload = loadQuestion();

const generateBenchmark = (e) => {
  e.preventDefault();
  const btn = e.submitter;
  if (btn.innerText === questions[questionNumber].correct_answer) {
    studentScore.push(1);
  } else {
    studentScore.push(0);
  }

  // AUMENTIAMO IL NOSTRO CONTATORE DOPO AVER SALVATO IL RISULTATO
  questionNumber++;

  if (questionNumber <= 9) {
    formNode.innerText = "";
    loadQuestion();
    totalSeconds = 60;
  } else {
    calcAnswers();
  }
};

formNode.onsubmit = generateBenchmark;

function updateTimer() {
  if (totalSeconds === 0) {
    //clearInterval(timerId);
    studentScore.push(0);
    questionNumber++;
    formNode.innerText = "";
    loadQuestion();
    totalSeconds = 60;
    document.getElementById("time").innerText = "0";
  }

  const seconds = String(totalSeconds).padStart(2, "0");
  document.getElementById("time").innerText = seconds;
  totalSeconds--;
}

const timerId = setInterval(updateTimer, 1000);

updateTimer();
