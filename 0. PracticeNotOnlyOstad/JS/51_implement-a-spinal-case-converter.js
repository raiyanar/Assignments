function spinalCase(str) {
  const camelCaseHandled = str.replace(/([a-z])([A-Z])/g, "$1-$2");

  const nonNumCharHandled = camelCaseHandled.replace(/[^a-zA-Z0-9]+/g, "-");

  const lowerCased = nonNumCharHandled.toLowerCase();

  return lowerCased;
}

console.log(spinalCase("ProductLanding page"));
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
