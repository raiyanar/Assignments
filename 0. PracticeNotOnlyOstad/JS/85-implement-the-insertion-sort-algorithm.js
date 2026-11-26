function insertionSort(arr) {
  const array = arr.slice(); // 1 copy
  for (let i = 1; i < array.length; i++) {
    // 2 start at index 1
    let current = array[i]; // 3 item to insert
    let j = i - 1; // 4 look left

    while (j >= 0 && array[j] > current) {
      // 5 shift bigger items
      array[j + 1] = array[j]; // 6 move right
      j--; // 7 go left
    }

    array[j + 1] = current; // 8 place current
  }
  return array; // 9 return sorted
}
