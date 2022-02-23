"use strict";

const translate = require("../src/translate");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with capital vowel", () => {
    const result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with a consonant", () => {
    const result = translate("Happy");
    expect(result).toBe("appyhay");
  });
  test("word that starts with two consonants", () => {
    const result = translate("Grapple");
    expect(result).toBe("applegray");
  });
});
