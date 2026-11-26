const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

// 1 & 2
function compactFragments(arrOfFrag) {
  let copyOfArr = structuredClone(arrOfFrag);
  let compacted = "";

  for (let i = 0; i < copyOfArr.length; i++) {
    if (copyOfArr[i] === undefined) {
      copyOfArr.splice(i, 1);
      compacted = "[COMPACTED]";
    }
  }
  console.log(compacted);

  return copyOfArr;
}
// 3
const compactedShuffledFragments = compactFragments(shuffledFragments);
// console.log(compactedShuffledFragments);

// 4
function sortFragments(arrOfFrag) {
  let copy = structuredClone(arrOfFrag);
  let n = copy.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (copy[j].id > copy[j + 1].id) {
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
      }
    }
  }
  return copy;
}

// 5
const sortedFragments = sortFragments(compactedShuffledFragments);
// console.log(sortedFragments);

// 6
function dedupeFragments(sortedArr) {
  let seen = {};
  let result = [];
  let logged = {};
  for (let i = 0; i < sortedArr.length; i++) {
    let item = sortedArr[i];
    let id = item.id;

    if (seen[id]) {
      if (!logged[id]) {
        console.log("[DEDUPED]");
        logged[id] = true;
      }
    } else {
      result.push(item);
      seen[id] = true;
    }
  }
  return result;
}

// 7
const dedupedFragments = dedupeFragments(sortedFragments);
// console.log(dedupedFragments);

// 8
function fillMissingFragments(sortedArr) {
  let result = [];
  for (let i = 0; i < sortedArr.length; i++) {
    let item = sortedArr[i];

    result.push(item);

    let nextItem = sortedArr[i + 1];

    if (!nextItem) continue;

    let id = item.id;
    let nextId = nextItem.id;

    for (let j = id + 1; j < nextId; j++) {
      result.push({ id: j, text: "[...]" });
      console.log("[FILLED]");
    }
  }
  return result;
}

// 9
const filledFragments = fillMissingFragments(dedupedFragments);
// console.log(filledFragments);

// 10
function assembleStory(sortedArr) {
  let result = "";
  for (let i = 0; i < sortedArr.length; i++) {
    let item = sortedArr[i];
    let text = item.text;
    let nextItem = sortedArr[i + 1];
    if (nextItem) {
      result += `${text}\n`;
    } else {
      result += `${text}`;
    }
  }
  return result;
}

// 11
console.log(assembleStory(filledFragments));
