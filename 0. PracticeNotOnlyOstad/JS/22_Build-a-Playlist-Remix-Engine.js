const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

//1
function flattenPlaylists(arrOfArrOfObj) {
  const result = [];
  if (!Array.isArray(arrOfArrOfObj)) {
    return result;
  }
  for (let i = 0; i < arrOfArrOfObj.length; i++) {
    for (let j = 0; j < arrOfArrOfObj[i].length; j++) {
      let item = arrOfArrOfObj[i][j];
      item["source"] = [i, j];
      result.push(item);
    }
  }
  return result;
}

function scoreTracks(arrWithSource) {
  for (let i = 0; i < arrWithSource.length; i++) {
    arrWithSource[i]["score"] =
      arrWithSource[i].votes * 10 - Math.abs(arrWithSource[i].bpm - 120);
  }
  return arrWithSource;
}

function dedupeTracks(arrWithScore) {
  let result = [];
  let seen = {};
  for (let i = 0; i < arrWithScore.length; i++) {
    let item = arrWithScore[i];
    let id = item.trackId;
    if (seen[id] !== true) {
      result.push(arrWithScore[i]);
      seen[id] = true;
    }
  }
  return result;
}

function enforceArtistQuota(arrWithoutDupe, maxPerArtist) {
  let result = [];
  let seen = {};
  for (let i = 0; i < arrWithoutDupe.length; i++) {
    let item = arrWithoutDupe[i];
    let artist = item.artist;

    if (seen[artist] === undefined) {
      seen[artist] = 0;
    }
    if (seen[artist] !== maxPerArtist) {
      result.push(item);
      seen[artist]++;
    }
  }
  return result;
}

function buildSchedule(arrWithMaxArt) {
  const result = [];
  for (let i = 0; i < arrWithMaxArt.length; i++) {
    let slot = i + 1;
    let trackId = arrWithMaxArt[i].trackId;
    result.push({ slot, trackId });
  }
  return result;
}

function remixPlaylist(playlists, maxPerArtist) {
  let arrWithSource = flattenPlaylists(playlists);
  // console.log(arrWithSource);
  let arrWithScore = scoreTracks(arrWithSource);
  // console.log(arrWithScore);
  let arrWithoutDupe = dedupeTracks(arrWithScore);
  // console.log(arrWithoutDupe);
  let arrWithMaxArt = enforceArtistQuota(arrWithoutDupe, maxPerArtist);
  // console.log(arrWithMaxArt);
  let arrWithSlot = buildSchedule(arrWithMaxArt);
  // console.log(arrWithSlot);

  return arrWithSlot;
}

console.log(remixPlaylist(playlists, 5));
