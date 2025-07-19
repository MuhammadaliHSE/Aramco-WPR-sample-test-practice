const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<hyper>"],
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: 0
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "HTML", "C"],
        answer: 2
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    }
];

document.getElementById('startBtn').onclick = function() {
    document.getElementById('quizForm').style.display = 'block';
    this.style.display = 'none';
    loadQuestions();
};

function loadQuestions() {
    const container = document.getElementById('questions');
    questions.forEach((q, index) => {
        const qDiv = document.createElement('div');
        qDiv.classList.add('question');
        qDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach((opt, i) => {
            qDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${i}"> ${opt}
                </label><br>`;
        });
        container.appendChild(qDiv);
    });
}

document.getElementById('quizForm').onsubmit = function(e) {
    e.preventDefault();
    let score = 0;
    questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });
    document.getElementById('result').innerText = `You scored ${score} out of ${questions.length}`;
};
