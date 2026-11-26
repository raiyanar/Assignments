const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

// Click handler
pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector(".clip");
    audio.currentTime = 0;
    audio.play();
    display.innerText = pad.id;
  });
});

// Keyboard handler
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  if (audio && audio.classList.contains("clip")) {
    audio.currentTime = 0;
    audio.play();
    display.innerText = audio.parentElement.id;
  }
});
