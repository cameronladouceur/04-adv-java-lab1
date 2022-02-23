"use strict";

// const translate = (word) => {
//   if (
//     word.charAt(0) === "a" ||
//     word.charAt(0) === "e" ||
//     word.charAt(0) === "i" ||
//     word.charAt(0) === "o" ||
//     word.charAt(0) === "u"
//   ) {
//     return `${word}way`;
//   } else {
//     const consonantWord = word.slice(1);
//     const consonantLetter = word.charAt(0);
//     return `${consonantWord}${consonantLetter}ay`;
//   }
// };

const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter));
    return word.slice(index) + word.slice(0, index) + "ay";
  }
};

module.exports = translate;
