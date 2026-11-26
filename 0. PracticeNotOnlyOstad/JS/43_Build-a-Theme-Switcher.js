const themes = [
  {
    name: "light",
    message: "This is a light theme.",
  },
  {
    name: "dark",
    message: "This is a dark theme.",
  },
  {
    name: "green",
    message: "This is a green theme.",
  },
];

const themeSwitcher = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");

const body = document.querySelector("body");
const liveRegion = document.querySelector(`[aria-live="polite"]`);

themeSwitcher.addEventListener("click", () => {
  if (themeDropdown.hidden) {
    themeDropdown.hidden = false;
    themeSwitcher.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.hidden = true;
    themeSwitcher.setAttribute("aria-expanded", "false");
  }
});

themeDropdown.addEventListener("click", (event) => {
  body.className = event.target.id;

  let themeName = event.target.id.replace("theme-", "");

  let selectedTheme = themes.find((t) => {
    return t.name === themeName;
  });
  liveRegion.textContent = selectedTheme.message;
});
