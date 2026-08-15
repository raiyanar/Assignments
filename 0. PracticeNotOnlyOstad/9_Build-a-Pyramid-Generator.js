function pyramid(p, n, inverted) {
  let rows = [];
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let chars = p.repeat(2 * i + 1);
    rows.push(spaces + chars);
  }

  if (inverted) {
    rows.reverse();
  }
  return "\n" + rows.join("\n") + "\n";
}
console.log(pyramid("0", 5, false));
