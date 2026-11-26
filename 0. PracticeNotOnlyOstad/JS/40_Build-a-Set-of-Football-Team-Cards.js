const footballTeam = {
  team: "Boder Dol",
  year: 2000,
  headCoach: "Adib",
  players: [
    {
      name: "Ruby",
      position: "forward",
      isCaptain: true,
    },
    {
      name: "Likhon",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Abdur Rahman",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Yamin",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Nimmi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Mizan",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Aysha",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Aldaayee",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Abdullah",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Mohammad Omor",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const players = document.getElementById("players");

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

players.addEventListener("change", (event) => {
  let htmlSet;
  if (event.target.value === "all") {
    htmlSet = footballTeam.players.map((player) => {
      return `<div class="player-card">
                <h2>${player.isCaptain ? `(Captain)` : ""} ${player.name}</h2>
                <p>Position: ${player.position}</p>
             </div>`;
    });
    playerCards.innerHTML = htmlSet.join("");
  } else {
    let filtered = footballTeam.players.filter((player) => {
      return event.target.value === player.position;
    });
    htmlSet = filtered.map((player) => {
      return `<div class="player-card">
    <h2>${player.isCaptain ? `(Captain)` : ""} ${player.name}</h2>
    <p>Position: ${player.position}</p>
  </div>`;
    });
    playerCards.innerHTML = htmlSet.join("");
  }
});
