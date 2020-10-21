//localStorage.setItem("key", value);
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
