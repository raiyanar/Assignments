function permuteString(str, prefix = "", results = []) {
  if (str.length === 0) {
    if (!results.includes(prefix)) {
      results.push(prefix);
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let rest = str.slice(0, i) + str.slice(i + 1);
    permuteString(rest, prefix + char, results);
  }
  return results;
}

console.log(permuteString("cat"));
