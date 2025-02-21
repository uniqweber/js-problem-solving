// 1. Write a JavaScript function that takes a string as an input and returns the string with all vowels removed.
const rmVowelFromStr = (str = "hello") => {
  const vowels = "aeiou";
  let result = "";
  [...str].forEach((character) => {
    if (!vowels.includes(character)) {
      result += character;
    }
  });
  return result;
};
// 2. Write a JavaScript function that takes a string as an input and returns the string with all consonants removed.
const rmConstant = (str = "hello") => {
  const vowels = "aeiou";
  let result = "";
  [...str].forEach((character) => {
    if (vowels.includes(character)) result += character;
  });
  return result;
};
// 3. Write a JavaScript function that takes a string as an input and returns the string with all non-alphabetic characters removed.
const rmNonAlphabeticChar = (str = "hello13world") => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  [...str].forEach((character) => {
    if (alphabet.includes(character.toLowerCase())) result += character;
  });
  return result;
};
// 4. Write a JavaScript function that takes a string as an input and returns the string with all characters converted to upper case.
const convertAllToUppercase = (str = "hello") => str.toUpperCase();
// 5. Write a JavaScript function that takes a string as an input and returns the string with all characters converted to lower case.
const convertAllToLowercase = (str = "hello") => str.toLowerCase();
// 6. Write a JavaScript function that takes a string as an input and returns the string with all characters converted to title case.
const convertAllToTitleCase = (str = "hello world") => {
  return str
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
// 7. Write a JavaScript function that takes a string as an input and returns true if the string is a palindrome, false otherwise.
const checkPalindrome = (str = "hello") => {
  return str === str.split("").reverse().join("");
};
// 8. Write a JavaScript function that takes a string as an input and returns the string with all duplicate characters removed.
const rmDuplicateCharacter = (str = "hello") => {
  let result = "";
  str.split("").forEach((character) => {
    if (!result.includes(character)) {
      result += character;
    }
  });
  return result;
};
// 9. Write a JavaScript function that takes a string as an input and returns the string with all characters reversed.
const reverseStr = (str = "hello") => str.split("").reverse().join("");
// 10. Write a JavaScript function that takes a string as an input and returns the string with all characters sorted in alphabetical order.
const sortStr = (str = "hello") =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
// 11. Write a JavaScript function that takes a string as an input and returns the string with all characters sorted in reverse alphabetical order.
const reverseSortStr = (str = "abc") => str.split("").sort((a, b) => b.localeCompare(a));
// 12. Write a JavaScript function that takes a string as an input and returns the number of vowels in the string.
const vowelCount = (str = "hello") => {
  let count = 0;
  const vowels = "aeiou";
  [...str].forEach((character) => {
    if (vowels.includes(character.toLowerCase())) {
      count++;
    }
  });
  return count;
};
// 13. Write a JavaScript function that takes a string as an input and returns the number of consonants in the string.
const constantCount = (str = "hello") => {
  let count = 0;
  const vowels = "aeiou";
  str.split("").forEach((character) => {
    if (!vowels.includes(character)) {
      count++;
    }
  });
  return count;
};
// 14. Write a JavaScript function that takes a string as an input and returns the number of non-alphabetic characters in the string.
const nonAlphabetCount = (str = "234h3lo") => {
  let count = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  str.split("").forEach((character) => {
    if (!alphabet.includes(character.toLowerCase())) count++;
  });
  return count;
};
// 15. Write a JavaScript function that takes a string as an input and returns the number of alphabetic characters in the string.
const countAlphabeticCharacter = (str = "1hello2") => {
  let count = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  str.split("").forEach((character) => {
    if (alphabet.includes(character)) count++;
  });
  return count;
};
// 16. Write a JavaScript function that takes a string as an input and returns the number of characters in the string.
const strLength = (str = "hello") => str.length;
// 17. Write a JavaScript function that takes a string as an input and returns the number of words in the string.
const countWordInStr = (str = "hello world") => str.trim().split(" ").length;
// 18. Write a JavaScript function that takes a string as an input and returns the string with all words reversed.
const reverseWordInStr = (str = "hello world") => str.trim().split(" ").reverse().join(" ");
// 19. Write a JavaScript function that takes a string as an input and returns the string with all words sorted in alphabetical order.
const sortStrWordInAlphabeticOrder = (str = "amar sonar bangla ami tumay valo bashi hello world") => {
  return str
    .trim()
    .split(" ")
    .sort((a, b) => a.localeCompare(b))
    .join(" ");
};
// 20. Write a JavaScript function that takes a string as an input and returns the string with all words sorted in reverse alphabetical order.
const sortStrWordInReverserAlphaOrder = (str = "amar sonar bangla ami tumay valobashi") => {
  return str
    .trim()
    .split(" ")
    .sort((a, b) => b.localeCompare(a));
};
// 21. Write a JavaScript function that takes a string as an input and returns the number of sentences in the string.
const sentenceCountInStr = (str = "hello. kemnon acho? ami valo achi. tumi kemon acho?") => {
  return str.match(/[^.!?]+[.!?]+/g).length;
};
// 22. Write a JavaScript function that takes a string as an input and returns the string with all sentences reversed.
const sentenceReverseInStr = (str = "hello. kemon acho? ami valo achi. tumi kemon acho? ") => {
  return str
    .match(/[^.!?]+[.!?]+/g)
    .map((sentence) => sentence.trim())
    .reverse()
    .join(" ");
};
// 23. Write a JavaScript function that takes a string as an input and returns the string with all sentences sorted in alphabetical order.
const sortSenInAlphaOrder = (str = "hello. kemon acho? ami valo achi. tumi kemon acho?") => {
  return str
    .trim()
    .match(/[^.!?]+[.!?]+/g)
    .map((sen) => sen.trim())
    .sort((a, b) => a.localeCompare(b))
    .join(" ");
};
// 24. Write a JavaScript function that takes a string as an input and returns the string with all sentences sorted in reverse alphabetical order.
const sortSenInReverseAlphaOrder = (str = "hello. kemon acho? ami valo achi. tumi kemon acho?") => {
  return str
    .trim()
    .match(/[^.!?]+[.!?]+/g)
    .map((sen) => sen.trim())
    .sort((a, b) => b.localeCompare(a))
    .join(" ");
};
// 25. Write a JavaScript function that takes a string as an input and returns the number of paragraphs in the string.
const countParagraphInStr = (str = "this is the first paragraph.\nThis is the second paragraph. \n") => {
  return str.split("\n").filter(Boolean).length;
};
// 26. Write a JavaScript function that takes a string as an input and returns the string with all paragraphs reversed.
const reverseParagraphInStr = (str = "this is the first paragraph.\nThis is the second paragraph.") => {
  return str.trim().split("\n").reverse().join("\n");
};
// 27. Write a JavaScript function that takes a string as an input and returns the string with all paragraphs sorted in alphabetical order.
const sortParagraphStrAlphaOrder = (str = "hello baby.\nnew here. \n i am good") => {
  return str
    .trim()
    .split("\n")
    .map((n) => n.trim())
    .sort((a, b) => a.localeCompare(b))
    .join("\n");
};
// 28. Write a JavaScript function that takes a string as an input and returns the string with all paragraphs sorted in reverse alphabetical order.
const sortParagraphStrRevAlphaOrder = (str = "hello baby.\nnew here. \n i am good") => {
  return str
    .trim()
    .split("\n")
    .map((n) => n.trim())
    .sort((a, b) => b.localeCompare(a));
};
// 29. Write a JavaScript function that takes a string as an input and returns the string with all white spaces removed.
const rmWhiteSpacesStr = (str = "hello world") => {
  return str.trim().split(" ").join("");
};
// 30. Write a JavaScript function that takes a string as an input and returns the string with all tabs removed.
const tabsRemoveStr = (str = "hello\tworld") => {
  return str
    .trim()
    .split("\t")
    .map((t) => t.trim())
    .join(" ");
};
// 31. Write a JavaScript function that takes a string as an input and returns the string with all new lines removed.
const rmNewlineStr = (str = "hello baby.\nnew here. \n i am good") => {
  return str
    .trim()
    .split("\n")
    .map((n) => n.trim())
    .join(" ");
};
// 32. Write a JavaScript function that takes a string as an input and returns the string with all form feeds removed.
const rmFormFeeds = (str = "Remove\f all\f form\f feeds.") => {
  return str
    .trim()
    .split("\f")
    .map((n) => n.trim())
    .join(" ");
};
// 33. Write a JavaScript function that takes a string as an input and returns the string with all carriage returns removed.
const rmCarriage = (str = "Hello\rWorld") => {
  return str.trim().split("\r").join(" ");
};
// 34. Write a JavaScript function that takes a string as an input and returns the string with all backspaces removed.
const rmBackspaces = (str = "Hello\bWorld") => {
  return str.trim().split("\b").join(" ");
};
// 35. Write a JavaScript function that takes a string as an input and returns the string with all vertical tabs removed.
const rmVerticalTab = (str = "Hello\vWorld") => {
  return str.trim().split("\v").join(" ");
};
// 38. Write a JavaScript function that takes a string as an input and returns the string with all digits removed.
const rmDigits = (str = "Hello123World") => {
  const digits = "0123456789";
  return str
    .trim()
    .split("")
    .filter((char) => !digits.includes(char))
    .join("");
};
// 39. Write a JavaScript function that takes a string as an input and returns the string with all letters removed.
const rmLetters = (str = "a12%2:afdc") => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return str
    .trim()
    .split("")
    .filter((char) => !letters.includes(char))
    .join("");
};
// 40. Write a JavaScript function that takes a string as an input and returns the string with all symbols removed.
const rmAllSymbols = (str = "%*##_(#(&((}hello34&*^(") => {
  const symbols = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
  return str
    .trim()
    .split("")
    .filter((sym) => !symbols.includes(sym))
    .join("");
};

// 41. Write a JavaScript function that takes a string as an input and returns the string with all punctuation removed.
// 42. Write a JavaScript function that takes a string as an input and returns the string with all whitespace characters removed.
// 43. Write a JavaScript function that takes a string as an input and returns the string with all non-alphanumeric characters removed.
// 44. Write a JavaScript function that takes a string as an input and returns the string with all alphanumeric characters removed.
// 45. Write a JavaScript function that takes a string as an input and returns the string with all alphabetic characters removed.
// 46. Write a JavaScript function that takes a string as an input and returns the string with all digits removed.
// 47. Write a JavaScript function that takes a string as an input and returns the string with all letters removed.
// 48. Write a JavaScript function that takes a string as an input and returns the string with all symbols removed.
// 49. Write a JavaScript function that takes a string as an input and returns the string with all punctuation removed.
// 50. Write a JavaScript function that takes a string as an input and returns the string with all whitespace characters removed.
