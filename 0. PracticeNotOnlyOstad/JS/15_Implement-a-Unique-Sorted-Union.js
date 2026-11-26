function uniteUnique(...arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let arrI = arr[i];
    for (let j = 0; j < arr[i].length; j++) {
      let item = arrI[j];
      if (result.includes(item)) {
        continue;
      } else {
        result.push(item);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
