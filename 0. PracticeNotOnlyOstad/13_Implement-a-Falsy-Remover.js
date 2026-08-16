let arr = [7, "ate", "", false, 9];

function bouncer(arr) {
  let result = [];
  let falsy = [false, null, 0, "", undefined, NaN];
  let copy = structuredClone(arr);
  for (let i = 0; i < copy.length; i++) {
    if (!falsy.includes(copy[i])) {
      result.push(copy[i]);
    }
  }

  return result;
}

console.log(bouncer(arr));
