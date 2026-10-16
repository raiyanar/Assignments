// ---------- Helper functions ----------

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, arr) {
  element.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement("span");
    span.textContent = arr[i];
    element.appendChild(span);
  }
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

function highlightCurrentEls(element, index) {
  const children = element.children;
  if (children[index]) {
    children[index].style.border = "2px dashed red";
  }
  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
  }
}

// ---------- DOM references ----------

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

// ---------- Generate button ----------

generateBtn.addEventListener("click", () => {
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  const newArray = generateArray();
  fillArrContainer(startingArray, newArray);
  highlightCurrentEls(startingArray, 0);
});

// ---------- Sort button ----------

sortBtn.addEventListener("click", () => {
  // Read the current array values from #starting-array
  const arr = [];
  startingArray.querySelectorAll("span").forEach((span) => {
    arr.push(Number(span.textContent));
  });

  // Reset container: keep only #starting-array
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  // #starting-array = step 0 (start of first comparison)
  highlightCurrentEls(startingArray, 0);

  let swapped = true;
  let isFirstComparison = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      // The starting array already represents the first comparison,
      // so skip creating a duplicate div for it.
      if (!isFirstComparison) {
        const stepDiv = generateContainer();
        fillArrContainer(stepDiv, arr);
        highlightCurrentEls(stepDiv, i);
        arrayContainer.appendChild(stepDiv);
      }
      isFirstComparison = false;

      // Perform the comparison; if out of order, swap for the NEXT step
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }
    }
  }

  // Final div: sorted array (no highlight)
  const finalDiv = generateContainer();
  fillArrContainer(finalDiv, arr);
  arrayContainer.appendChild(finalDiv);
});
