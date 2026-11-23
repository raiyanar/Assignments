interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}

let currentCards: FlashCard[] = [
  { questionText: "What is 2 + 2?", questionAnswer: "4" },
  { questionText: "Capital of France?", questionAnswer: "Paris" },
];

let currentIndex = 0;

const flashcard = document.getElementById("flashcard")!;
const questionDisplay = document.getElementById("question-display")!;
const answerDisplay = document.getElementById("answer-display")!;
const errorMsg = document.getElementById("error-msg")!;

function showCard() {
  const card = currentCards[currentIndex];
  if (card) {
    questionDisplay.textContent = card.questionText;
    answerDisplay.textContent = card.questionAnswer;
  }
  flashcard.classList.remove("flipped");
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

document.getElementById("delete-btn")!.addEventListener("click", () => {
  if (currentCards.length > 0) {
    currentCards.pop();
    currentIndex = currentCards.length - 1;
    showCard();
  }
});

const form = document.querySelector<HTMLFormElement>("#entry-form")!;
const frontText = document.querySelector<HTMLTextAreaElement>("#front-text")!;
const backText = document.querySelector<HTMLTextAreaElement>("#back-text")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const questionText = frontText.value.trim();
  const questionAnswer = backText.value.trim();

  if (!questionText || !questionAnswer) {
    const errMsg = "Please fill in both question and answer.";
    errorMsg.textContent = errMsg;
    throw new InvalidUserInputError(errMsg);
  }

  errorMsg.textContent = "";
  currentCards.push({ questionText, questionAnswer });
  currentIndex = currentCards.length - 1;

  frontText.value = "";
  backText.value = "";
  showCard();
});

showCard();
