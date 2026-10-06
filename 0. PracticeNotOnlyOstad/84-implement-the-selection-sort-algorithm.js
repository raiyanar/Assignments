function selectionSort(array) {
  // copy the array so we don't mutate the original input
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // find the smallest element in the remaining unsorted part
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap the smallest element with the current position
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]),
);
