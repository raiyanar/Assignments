function main(input) {
  const lines = input.split(/\r?\n/);
  const t = parseInt(lines[0], 10);
  for (let i = 1; i <= t; i++) {
    const s = lines[i];
    const freq = {};
    for (const ch of s) freq[ch] = (freq[ch] || 0) + 1;
    let ans = "N";
    for (const ch of s) {
      if (freq[ch] === 1) {
        ans = ch;
        break;
      }
    }
    console.log(ans);
  }
}
