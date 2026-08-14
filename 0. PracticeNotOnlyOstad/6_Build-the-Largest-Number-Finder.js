const arrOfArr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

function largestOfAll(arr) {
  const result = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    result.push(Math.max(...arrOfArr[i]));
  }
  return result;
}
console.log(largestOfAll(arrOfArr));
