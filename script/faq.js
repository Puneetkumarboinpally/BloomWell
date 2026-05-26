const questionContainers = document.querySelectorAll(".question-container");
const answerContainer = document.querySelector(".answer-container");
const faqToggle = document.querySelector(".faq-toggle");

questionContainers.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector(".answer-container");
    const toggle = question.querySelector(".faq-toggle");

    answer.classList.toggle("active");
    toggle.classList.toggle("active");
  });
});
