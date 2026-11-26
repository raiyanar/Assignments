const recursiveCountdown = (number) => {
  if (number < 1) {
    return;
  }
  console.log(number);
  recursiveCountdown(number - 1);
};

recursiveCountdown(5);

const recursiveCountdown2 = (number) => {
  if (number < 1) {
    return;
  }
  recursiveCountdown2(number - 1);
  console.log(number);
};

recursiveCountdown2(5);

const recursiveCountdown3 = (number) => {
  console.log(`Function execution started for number: ${number}`);
  if (number < 1) {
    console.log(`Base case reached, begin resolving stack`);
    return;
  }
  console.log(`Calling recursiveCountdown with number: ${number - 1}`);
  recursiveCountdown3(number - 1);
  console.log(`Function execution completed for number: ${number}`);
};

recursiveCountdown3(5);

function countup(number) {
  let countArray;
  if (number < 1) {
    return [];
  } else {
    countArray = countup(number - 1);
    countArray.push(number);
    return countArray;
  }
}
console.log(countup(5));
