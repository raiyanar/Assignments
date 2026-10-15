function fibonacci(n) {
  const sequence = [0, 1];

  if (n === 0) return sequence[0];
  if (n === 1) return sequence[1];

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[n];
}
