function destroyer(arr, ...valToRemove) {
return arr.filter(item => !valToRemove.includes(item))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));