function main(input) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };
  for (const ch of input) {
    if (ch === "(" || ch === "{" || ch === "[") stack.push(ch);
    else if (ch in pairs && stack.pop() !== pairs[ch]) {
      console.log("Brackets are not balanced.");
      return;
    }
  }
  console.log(stack.length === 0 ? "Brackets are balanced." : "Brackets are not balanced.");
}
