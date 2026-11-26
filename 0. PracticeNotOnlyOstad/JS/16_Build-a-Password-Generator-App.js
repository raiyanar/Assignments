function generatePassword(passLength) {
  let passStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let randomChars = [];

  for (let i = 0; i < passLength; i++) {
    randomChars.push(passStr[Math.floor(Math.random() * passStr.length)]);
  }

  let result = randomChars.join("");
  return result;
}

const password = generatePassword(10);
console.log(`Generated password: ${password}`);
