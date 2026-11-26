const smallestCommons = (arr) => {
  let a = arr[0];
  let b = arr[1];
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array.reduce((acc, curr) => {
    while (true) {
      if (max % acc === 0 && max % curr === 0) {
        return max;
      }
      max++;
    }
  });
};

console.log(smallestCommons([1, 5]));
