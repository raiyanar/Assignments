const allItem = document.querySelectorAll(".favorite-icon");

allItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("filled")) {
      item.classList.remove("filled");
      item.innerHTML = "&#9825;";
    } else {
      item.classList.add("filled");
      item.innerHTML = "&#10084;";
    }
  });
});
