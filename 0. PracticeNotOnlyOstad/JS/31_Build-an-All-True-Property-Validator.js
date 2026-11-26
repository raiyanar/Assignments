function truthCheck(collection, pre) {
  let result;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i][pre]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot",
  ),
);
