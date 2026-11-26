let arr = [1, 1, 1, 2, 1, 1, 1];
let func = function (n) {
  return n === 2;
};

function dropElements(arr, func) {
  let test = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      test.push(i);
    }
    if (test.length > 0) {
      arr.splice(0, i);
      result = structuredClone(arr);
      break;
    }
  }
  return result;
}

console.log(dropElements(arr, func));
