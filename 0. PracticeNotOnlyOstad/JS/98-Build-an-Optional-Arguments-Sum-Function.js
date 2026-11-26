function addTogether(...args) {
  const isValidNumber = (value) =>
    typeof value === "number" && !Number.isNaN(value);
  if (args.length === 2) {
    const [a, b] = args;
    if (!isValidNumber(a) || !isValidNumber(b)) {
      return undefined;
    }
    return a + b;
  }

  if (args.length === 1) {
    const a = args[0];
    if (!isValidNumber(a)) {
      return undefined;
    }
    return function (b) {
      if (!isValidNumber(b)) {
        return undefined;
      }
      return a + b;
    };
  }
  return undefined;
}
