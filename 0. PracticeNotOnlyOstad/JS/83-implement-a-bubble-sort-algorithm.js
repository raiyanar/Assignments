function bubbleSort(array) {
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swaped = true;
      }
    }
  }
  return array;
}

console.log(bubbleSort([4, 5, 3, 6, 1]));
