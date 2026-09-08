function translatePigLatin(str) {
  const firstVowelIndex = str.search(/[aeiou]/i);

  if (firstVowelIndex === -1) {
    str += "ay";
  } else if (firstVowelIndex === 0) {
    str += "way";
  } else {
    const consonant = str.slice(0, firstVowelIndex);
    const rest = str.slice(firstVowelIndex);
    return rest + consonant + "ay";
  }
  return str;
}

console.log(translatePigLatin("bbbbbbbbbbbb"));
