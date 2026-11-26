function getIndexToIns(arr, num) {
  let newArr = arr.concat(num);
  let sortedArr = newArr.sort((a, b) => a - b);
  return sortedArr.findIndex((item) => item === num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
