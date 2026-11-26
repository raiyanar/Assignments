const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  let message = textInput.value.toLowerCase();
  let formatted = message.replace(/[^a-zA-Z0-9]/g, "");
  if (message.length === 0) {
    alert("Please input a value");
    return;
  }

  if (formatted.split("").reverse().join("").toLowerCase() === formatted) {
    result.textContent = `${textInput.value} is a palindrome.`;
  } else {
    result.textContent = `${textInput.value} is not a palindrome.`;
  }
});
