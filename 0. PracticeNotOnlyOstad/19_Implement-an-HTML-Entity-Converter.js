// converting special characters in a string with their corresponding HTML entities.

function convertHTML(str) {
  let entiti = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  let chars = str.split("");

  for (let i = 0; i < chars.length; i++) {
    if (entiti[chars[i]]) {
      chars[i] = entiti[chars[i]];
    }
  }

  // for ( let i = 0; i < chars.length; i++) {
  //   for (let j = 0; j < entiti.length; j++) {
  //     let key = Object.keys(entiti[j])[0];
  //     if (chars[i] === key) {
  //       chars[i] = entiti[j][key];
  //     }
  //   }
  // }
  return chars.join("");
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
