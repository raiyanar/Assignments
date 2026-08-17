//EXP: write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.

//ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]

function pairElement(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let lowChar = str[i].toLowerCase();
    if (lowChar === "a") {
      result.push(["A", "T"]);
    } else if (lowChar === "t") {
      result.push(["T", "A"]);
    } else if (lowChar === "c") {
      result.push(["C", "G"]);
    } else if (lowChar === "g") {
      result.push(["G", "C"]);
    } else {
      return "Please put correct strand base value! ('ATCG') ";
    }
  }
  return result;
}

pairElement("ATCGA");
