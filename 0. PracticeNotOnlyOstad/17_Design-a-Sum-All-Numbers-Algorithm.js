function sumAll(arr) {
  let result = 0;
  const num1 = arr[0];
  const num2 = arr[1];

  if (num1 > num2) {
    result += num1 + num2;
    for (let i = num2 + 1; i < num1; i++) {
      result += i;
    }
    return result;
  } else if (num2 > num1) {
    result += num1 + num2;
    for (let i = num1 + 1; i < num2; i++) {
      result += i;
    }
    return result;
  }
}

console.log(sumAll([1, 4]));
