function quicksort(array) {
  // Base case: 0 or 1 items is already sorted
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1]; // pick the last item as the pivot
  const left = []; // items smaller than or equal to the pivot
  const right = []; // items bigger than the pivot

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Sort each side, then glue: sorted left + pivot + sorted right
  return [...quicksort(left), pivot, ...quicksort(right)];
}
