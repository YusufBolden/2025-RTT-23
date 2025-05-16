const faqContainer = document.getElementById("faq-container");
const resetButton = document.getElementById("reset-button");

faqContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("question")) {
    const allAnswers = faqContainer.querySelectorAll(".answer");

    if (e.shiftKey) {
      // Shift-click: Toggle all
      const openAll = Array.from(allAnswers).some((a) =>
        a.classList.contains("hidden")
      );
      allAnswers.forEach((answer) => {
        answer.classList.toggle("hidden", !openAll);
      });
    } else {
      // Toggle individual
      const answer = e.target.nextElementSibling;
      if (answer && answer.classList.contains("answer")) {
        answer.classList.toggle("hidden");
      }
    }
  }
});

resetButton.addEventListener("click", () => {
  const answers = faqContainer.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.classList.add("hidden");
  });
});


// 1. How did event delegation simplify the implementation of the FAQ section?
// Event delegation allowed us to manage all question clicks with a single event listener on the container, improving performance and maintainability especially if FAQ items are added dynamically.

// 2. What challenges did you face when implementing the Shift-click functionality?
// A key challenge is ensuring consistent toggle behavior—either opening or closing all answers—depending on the current state. We resolved this by checking if any answer is hidden and toggling accordingly.

// 3. How does the “Reset All” functionality improve the user experience?
// It gives users a quick way to collapse all open answers, especially after using the Shift-click to expand everything. This improves control and accessibility.