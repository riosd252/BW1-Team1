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
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let studentScore = [];

let questionNumber = 0;

// const formNode = document.querySelector("form");

const mainDiv = document.querySelector(".benchmark");

window.onload = function () {
  const h1 = document.querySelector("h1");
  h1.innerText = questions[questionNumber].question;

  if (questions[questionNumber].type === "multiple") {
    const formNode = document.createElement("form");

    const button1 = document.createElement("button");
    button1.className = "btn";
    const button2 = document.createElement("button");
    button2.className = "btn";
    const br = document.createElement("br");
    const button3 = document.createElement("button");
    button3.className = "btn";
    const button4 = document.createElement("button");
    button4.className = "btn";

    formNode.appendChild(button1);
    formNode.appendChild(button2);
    formNode.appendChild(br);
    formNode.appendChild(button3);
    formNode.appendChild(button4);

    mainDiv.appendChild(formNode);
  } else {
    const formNode = document.createElement("form");

    const button1 = document.createElement("button");
    button1.className = "btn";
    const button2 = document.createElement("button");
    button2.className = "btn";

    formNode.appendChild(button1);
    formNode.appendChild(button2);

    mainDiv.appendChild(formNode);
  }

  questionNumber++;
};

const generateBenchmark = (e) => {
  e.preventDefault();

  formNode.remove();

  const h1 = document.querySelector("h1");
  h1.innerText = questions[questionNumber].question;

  if (questions[questionNumber].type === "multiple") {
    const formNode = document.createElement("form");

    const button1 = document.createElement("button");
    button1.className = "btn";
    const button2 = document.createElement("button");
    button2.className = "btn";
    const br = document.createElement("br");
    const button3 = document.createElement("button");
    button3.className = "btn";
    const button4 = document.createElement("button");
    button4.className = "btn";

    formNode.appendChild(button1);
    formNode.appendChild(button2);
    formNode.appendChild(br);
    formNode.appendChild(button3);
    formNode.appendChild(button4);

    mainDiv.appendChild(formNode);
  } else {
    const formNode = document.createElement("form");

    const button1 = document.createElement("button");
    button1.className = "btn";
    const button2 = document.createElement("button");
    button2.className = "btn";

    formNode.appendChild(button1);
    formNode.appendChild(button2);

    mainDiv.appendChild(formNode);
  }

  questionNumber++;
};

formNode.onsubmit = generateBenchmark;
