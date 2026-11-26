const word = "madam";

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("").toLowerCase();
  if (word.toLowerCase() === reversed) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPalindrome(word));

const words = [
  "the",
  "cat",
  "adib",
  "likhon",
  "madam",
  "ruby",
  "abdurrahman",
  "nun",
  "the",
  "cat",
  "adib",
  "yamin",
];

function findPalindromeBreaks(words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i]) === false) {
      result.push(i);
    }
  }
  return result;
}

// console.log(findPalindromeBreaks(words));

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }
  let phraseCount = {};

  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");
    if (phraseCount[phrase] === undefined) {
      phraseCount[phrase] = 1;
    } else {
      phraseCount[phrase]++;
    }
  }

  let result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");
    if (phraseCount[phrase] > 1) {
      result.push(i);
    }
  }
  return result;
}

console.log(findRepeatedPhrases(words, 2));

let texts = [["word one"], ["word two"]];

function analyzeTexts(texts, phraseLength) {
  const result = [];
  if (texts.length === 0) {
    return [];
  }
  for (let text of texts) {
    let repeatedPhrase = findRepeatedPhrases(text, phraseLength);
    let palindromeBreak = findPalindromeBreaks(text);
    result.push({
      repeatedPhrases: repeatedPhrase,
      palindromeBreaks: palindromeBreak,
    });
  }
  return result;
}

console.log(analyzeTexts(texts, 2));
