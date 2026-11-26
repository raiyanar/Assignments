function whatIsInAName(arrOfObj, srcObj) {
  return arrOfObj.filter((obj) =>
    Object.keys(srcObj).every((key) => obj[key] === srcObj[key]),
  );
}

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 },
  ),
);
