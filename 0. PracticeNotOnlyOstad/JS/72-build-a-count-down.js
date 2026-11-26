//Build a Countdown

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const smallerArr = countdown(n - 1);
    smallerArr.unshift(n); // add n to the FRONT
    return smallerArr;
  }
}

console.log(countdown(10));
