const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag  = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let str = "";
  if (caseInsensitiveFlag.checked) {
    str+="i";
  }
  if (globalFlag.checked) {
    str+="g"; 
  }
  return str; 
}

testButton.addEventListener("click", () => {
  let pattern = regexPattern.value;
  let flags = getFlags();
  
  if (stringToTest.textContent.length === 0 || pattern.length === 0) {
    alert("No text inserted!");
    return;
  }
  const regex = new RegExp(pattern, flags);
  let testValue = stringToTest.textContent;
  let isMatch = regex.test(testValue); 
  
  if (!isMatch) {
    testResult.textContent = "no match";
  } else {
    stringToTest.innerHTML = testValue.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    testResult.textContent = testValue.match(regex).join(", ");
  }
})
