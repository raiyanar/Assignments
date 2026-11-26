let arr1 = ["claw", "tentacle"];
let arr2 = ["head", "shoulders", "knees", "toes"];

function frankenSplice(arr1, arr2, idx) {
  let arr2Copy = arr2.slice();
  arr2Copy.splice(idx, 0, ...arr1);
  return arr2Copy;
}

console.log(frankenSplice(arr1, arr2, 2));
