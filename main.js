let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

let allQuestions = [
  {
    title: "Q-1",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer3",
  },
  {
    title: "Q-2",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-3",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer4",
  },
  {
    title: "Q-4",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer3",
  },
  {
    title: "Q-5",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer2",
  },
  {
    title: "Q-6",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer4",
  },
  {
    title: "Q-7",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer3",
  },
  {
    title: "Q-8",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer2",
  },
  {
    title: "Q-9",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-10",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer3",
  },
  {
    title: "Q-11",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-12",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer4",
  },
  {
    title: "Q-13",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-14",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-15",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-16",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer2",
  },
  {
    title: "Q-17",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-18",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer2",
  },
  {
    title: "Q-19",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer1",
  },
  {
    title: "Q-20",
    answer_1: "Answer1",
    answer_2: "Answer2",
    answer_3: "Answer3",
    answer_4: "Answer4",
    right_answer: "Answer3",
  },
];

localStorage.setItem("allQuestions", JSON.stringify(allQuestions));

document.querySelector(".play").addEventListener("click", function () {
  let name = document.querySelector("#p-name").value;
  let main = document.querySelector(".main");
  let quiz = document.querySelector(".quiz-area");
  if (name === "") {
    alert(" Enter Name Please ");
  } else {
    main.style.display = "none";
    quiz.style.display = "block";
  }

  var stringQuestions = localStorage.getItem("allQuestions");
  quiz = JSON.parse(stringQuestions);
  //quizLength = allQuestions.length;
});

document.querySelector(".information").addEventListener("click", function () {
  let main = document.querySelector(".main");
  let info = document.querySelector(".info");
  main.style.display = "none";
  info.style.display = "block";
});

document.querySelector(".leaderboard").addEventListener("click", function () {
  let main = document.querySelector(".main");
  let leader = document.querySelector(".leader");
  main.style.display = "none";
  leader.style.display = "block";
});
