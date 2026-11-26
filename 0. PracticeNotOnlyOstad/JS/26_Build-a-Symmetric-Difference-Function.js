function diffArray(arr1, arr2) {
  const result = [];
  function func(item) {
    if (!(arr2.includes(item))) {
      result.push(item);
    }
  }
  function func2(item) {
    if (!(arr1.includes(item))) {
      result.push(item);
    }
  }
  arr1.filter(func);
  arr2.filter(func2);

  return result;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))