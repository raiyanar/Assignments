// create a function that converts a string to title case

let str = "I'm a little tea pot";
function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  let titleCase = words.join(" ");
  return titleCase;
}

console.log(titleCase(str));
