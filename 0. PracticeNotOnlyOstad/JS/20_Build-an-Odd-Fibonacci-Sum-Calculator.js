function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;
  while (curr <= num) {
    if(curr % 2 === 1) {
      sum += curr;
    }
    let next = curr + prev;
    prev = curr;
    curr = next;
  }
  return sum;
}

console.log(sumFibs(4));