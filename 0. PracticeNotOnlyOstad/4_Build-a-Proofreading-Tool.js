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
  "yamin",
];

function findPalindromeBreaks(words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i]) === false) {
      result.push(words.indexOf(words[i]));
    }
  }
  return result;
}

// console.log(findPalindromeBreaks(words));

function findRepeatedPhrases(words, phraseLength) {
  let result = [];
  if (phraseLength >= words.length) {
    return [];
  }

  // return [0, 8];
  // return merged;
}

console.log(findRepeatedPhrases(words, 2));
