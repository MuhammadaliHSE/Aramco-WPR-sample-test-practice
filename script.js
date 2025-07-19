
document.getElementById("start-btn").addEventListener("click", startTest);

const questions = [
  {
    question: "What does WPR stand for in Aramco?",
    options: ["Work Permit Receiver", "Workplace Risk", "Work Plan Record", "Worker Permit Request"],
    answer: 0
  },
  {
    question: "What is the minimum passing score for WPR test?",
    options: ["50%", "70%", "80%", "90%"],
    answer: 2
  }
];

function startTest() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach((option, i) => {
      div.innerHTML += `<label><input type="radio" name="q${index}" value="${i}"> ${option}</label><br>`;
    });
    container.appendChild(div);
  });
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.onclick = showResult;
  container.appendChild(submitBtn);
}

function showResult() {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });
  const result = document.getElementById("result");
  result.innerHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;
}
