function myReplace(str, before, after) {
  const isUpperCase = before[0] === before[0].toUpperCase();

  let newAfter;
  if (isUpperCase) {
    newAfter = after[0].toUpperCase() + after.slice(1);
  } else {
    newAfter = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, newAfter);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
