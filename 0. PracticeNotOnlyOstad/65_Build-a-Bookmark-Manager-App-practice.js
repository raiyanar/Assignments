// --- Get elements ---
const mainSection = document.getElementById("main-section"); //1
const formSection = document.getElementById("form-section"); //2
const bookmarkListSection = document.getElementById("bookmark-list-section"); //3
const categoryDropdown = document.getElementById("category-dropdown"); //4
const addBookmarkBtn = document.getElementById("add-bookmark-button"); //5
const closeFormBtn = document.getElementById("close-form-button"); //6
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form"); //7
const viewCategoryBtn = document.getElementById("view-category-button"); //8
const closeListBtn = document.getElementById("close-list-button"); //9
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button"); //10
const categoryList = document.getElementById("category-list"); //11
const nameInput = document.getElementById("name"); //12
const urlInput = document.getElementById("url"); //13
const categoryName = document.querySelector(".category-name"); //14

// --- 1. getBookmarks: read + validate ---
function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks");
  if (bookmarks === null) {
    return [];
  }

  let parsed;

  try {
    parsed = JSON.parse(bookmarks);
  } catch (e) {
    return [];
  }

  if (!Array.isArray(parsed)) {
    return [];
  }

  for (const b of parsed) {
    if (
      typeof b !== "object" ||
      b.name !== "string" ||
      b.category !== "string" ||
      b.url !== "string"
    ) {
      return [];
    }
  }

  return parsed;
}

// --- 2. Toggle helpers ---
function displayOrCloseForm() {
  mainSection.classList.toggle("hidden"); //1
  formSection.classList.toggle("hidden"); //2
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden"); //1
  bookmarkListSection.classList.toggle("hidden"); //3
}

// --- 3. Render one category list (used on view + delete) ---
function renderCategoryList(category) {
  categoryList.innerHTML = "";
  const bookmarks = getBookmarks().filter((b) => {
    b.category === category;
  });

  if (bookmarks.length === 0) {
    categoryList.innerHTML = "<p>No bookmarks found in that category.</p>";
    return;
  }
  for (const b of bookmarks) {
    categoryList.innerHTML += `<input type="radio" value="${b.name}" id="${b.name}">
    <label for="${b.name}"><a href="${b.url}">${b.name}</a></label>
    `;
  }
}

// --- 4. Add bookmark button -> show form ---
// 5
addBookmarkBtn.addEventListener("click", () => {
  categoryList.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

// --- 5. Close form button ---
closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

// --- 6. Save bookmark from form ---
addBookmarkFormBtn.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  bookmarks.push({
    name: nameInput.value,
    url: urlInput.value,
    category: categoryDropdown.value,
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  urlInput.value = "";
  nameInput.value = "";
});

// --- 7. View category button ---
viewCategoryBtn.addEventListener("click", () => {
  const category = categoryDropdown.value;
  categoryName.innerText = category;
  renderCategoryList(category);
  displayOrHideCategory();
});

// --- 8. Close list button ---
closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

// --- 9. Delete selected bookmark ---
deleteBookmarkBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="bookmark"]:checked');
  if (selected === null) return;

  const name = selected.value;
  const category = categoryDropdown.value;

  const remaining = getBookmarks().filter(
    (b) => !(b.name === name && b.category === category),
  );
  localStorage.setItem("bookmarks", JSON.stringify(remaining));

  renderCategoryList(category); // refresh list
});
