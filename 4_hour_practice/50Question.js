/*
1. Reverse a String
Problem: Take a string input and return it reversed.
Example: "hello" → "olleh"
*/

const reverseStr = (str = "hello") => str.split("").reverse().join("");

/*
2. Find the Length of a String
Problem: Take a string input and return its length.
Example: "hello" → 5
*/

const strLength = (str = "hello") => str.length;

/*
3. Sum of Two Numbers
Problem: Take two numbers and return their sum.
Example: 5 + 3 → 8
*/

const towSum = (a, b) => a + b;

/*
4. Check Even or Odd
Problem: Take a number and determine if it is even or odd.
Example: 4 → Even, 7 → Odd
*/

const isOddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

/*
5. Find the Maximum Number
Problem: Take an array of numbers and return the largest number.
Example: [1, 2, 3, 7, 5] → 7
*/

const findMaxNum = (arr) => Math.max(...arr);

/*
6. Count Vowels in a String
Problem: Take a string and count the number of vowels (a, e, i, o, u).
Example: "hello" → 2 (e, o)
*/

const countVowelInStr = (str) => {
  let count = 0;
  const vowels = "aeiou";
  [...str].forEach((char) => vowels.includes(char) && count++);
  return count;
};

/*
7. Sum of Digits
Problem: Take an integer and return the sum of its digits.
Example: 123 → 1 + 2 + 3 = 6
*/

const sumOfDigits = (digits) => {
  const totalOfDigits = digits
    ?.toString()
    .split("")
    .reduce((prev, curr) => Number(prev) + Number(curr));
  return totalOfDigits;
};

/*
8. Check Prime Number
Problem: Take a number and determine if it is prime.
Example: 7 → True, 8 → False
*/

const checkPrimeNum = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count === 2;
};

/*
9. Check Palindrome
Problem: Take a string and determine if it reads the same forwards and backwards.
Example: "madam" → True, "hello" → False
*/

const checkPalindrome = (str = "") => {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};

/*
10. Find the Average of Numbers
Problem: Take an array of numbers and return their average.
Example: [2, 4, 6, 8] → 5
*/

const findTheAvg = (arr) => arr.reduce((prev, curr) => prev + curr) / arr.length;

/*
11. Remove Vowels from a String
Problem: Take a string and return it with all vowels removed.
Example: "hello" → "hll"
*/

const rmVowelFromStr = (str = "hello") => {
  const vowels = "aeiou";
  let newStr = "";
  [...str].forEach((char) => {
    if (!vowels.includes(char.toLocaleLowerCase())) {
      newStr += char;
    }
  });
  return newStr;
};

/*
12. Remove Consonants from a String
Problem: Take a string and return it with all consonants removed.
Example: "hello" → "eo"
*/

const rmConstantFromStr = (str = "hello") => {
  const vowels = "aeiou";
  let strWithoutConstant = "";
  [...str].forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      strWithoutConstant += char;
    }
  });
  return strWithoutConstant;
};

/*
13. Sort Characters in Alphabetical Order
Problem: Take a string and return it with characters sorted alphabetically.
Example: "hello" → "ehllo"
*/

const sortStr = (str) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

/*
14. Sort Words in a Sentence
Problem: Take a sentence and return it with words sorted alphabetically.
Example: "the quick brown fox" → "brown fox quick the"
*/

const sortSentence = (sentence = "the quick brown fox") => sentence.split(" ").sort((a, b) => a.localeCompare(b));

/*
15. Count Words in a Sentence
Problem: Take a sentence and return the number of words.
Example: "the quick brown fox" → 4
*/

const countWords = (str = "the quick brown fox") => str.trim().split(" ").length;

/*
16. Capitalize Each Word
Problem: Take a sentence and return it with each word capitalized.
Example: "hello world" → "Hello World"
*/

/*
17. Remove Duplicates from Array
Problem: Take an array and return it with duplicates removed.
Example: [1, 2, 2, 3, 4] → [1, 2, 3, 4]
*/

/*
18. Calculate Factorial
Problem: Take a number and return its factorial.
Example: 5 → 120
*/

/*
19. Find Fibonacci Sequence
Problem: Take a number n and return the first n numbers of the Fibonacci sequence.
Example: n = 5 → [0, 1, 1, 2, 3]
*/

/*
20. Convert Celsius to Fahrenheit
Problem: Take a temperature in Celsius and convert it to Fahrenheit.
Example: 0°C → 32°F
*/

/*
21. Convert Fahrenheit to Celsius
Problem: Take a temperature in Fahrenheit and convert it to Celsius.
Example: 32°F → 0°C
*/

/*
22. Calculate Compound Interest
Problem: Take principal, rate, and time and calculate compound interest.
Example: P=1000, R=5%, T=2 → CI=102.5
*/

/*
23. Find GCD of Two Numbers
Problem: Take two numbers and return their greatest common divisor.
Example: GCD of 8 and 12 → 4
*/

/*
24. Find LCM of Two Numbers
Problem: Take two numbers and return their least common multiple.
Example: LCM of 8 and 12 → 24
*/

/*
25. Check Leap Year
Problem: Take a year and determine if it is a leap year.
Example: 2020 → True, 2019 → False
*/

/*
26. Generate Multiplication Table
Problem: Take a number and generate its multiplication table.
Example: 5 → 5, 10, 15, ..., 50
*/

/*
27. Convert String to Upper Case
Problem: Take a string and return it in upper case.
Example: "hello" → "HELLO"
*/

/*
28. Convert String to Lower Case
Problem: Take a string and return it in lower case.
Example: "HELLO" → "hello"
*/

/*
29. Find the Smallest Number in Array
Problem: Take an array and return the smallest number.
Example: [5, 2, 9, 1] → 1
*/

/*
30. Calculate Power of a Number
Problem: Take a base and exponent and return the power.
Example: 2^3 → 8
*/

/*
31. Remove Whitespaces from a String
Problem: Take a string and return it without whitespaces.
Example: "  hello world  " → "helloworld"
*/

/*
32. Replace Characters in a String
Problem: Take a string and replace all occurrences of a character with another.
Example: "hello", "l", "r" → "herro"
*/

/*
33. Find Unique Characters in a String
Problem: Take a string and return only unique characters.
Example: "hello" → "heo"
*/

/*
34. Convert Decimal to Binary
Problem: Take a decimal number and convert it to binary.
Example: 10 → 1010
*/

/*
35. Convert Binary to Decimal
Problem: Take a binary number and convert it to decimal.
Example: 1010 → 10
*/

/*
36. Calculate Square Root
Problem: Take a number and return its square root.
Example: 16 → 4
*/

/*
37. Find Sum of Array Elements
Problem: Take an array and return the sum of its elements.
Example: [1, 2, 3, 4] → 10
*/

/*
38. Check if Number is Positive or Negative
Problem: Take a number and determine if it is positive, negative, or zero.
Example: -5 → Negative
*/

/*
39. Generate Random Number
Problem: Generate a random number within a given range.
Example: Range 1 to 10 → 7
*/

/*
40. Count Occurrences of a Character in String
Problem: Take a string and a character, and count its occurrences.
Example: "hello", "l" → 2
*/

/*
41. Find Intersection of Two Arrays
Problem: Take two arrays and find their intersection.
Example: [1, 2, 3], [2, 3, 4] → [2, 3]
*/

/*
42. Find Union of Two Arrays
Problem: Take two arrays and find their union.
Example: [1, 2, 3], [2, 3, 4] → [1, 2, 3, 4]
*/

/*
43. Find Difference of Two Arrays
Problem: Take two arrays and find their difference.
Example: [1, 2, 3], [2, 3, 4] → [1]
*/

/*
44. Check if String Contains Substring
Problem: Take a string and a substring, and check if the string contains the substring.
Example: "hello", "ell" → True
*/

/*
45. Replace Substring in String
Problem: Take a string, a substring to find, and a substring to replace it with.
Example: "hello world", "world", "there" → "hello there"
*/

/*
46. Convert Number to String
Problem: Take a number and convert it to a string.
Example: 123 → "123"
*/

/*
47. Convert String to Number
Problem: Take a string and convert it to a number.
Example: "123" → 123
*/

/*
48. Find Median of Array
Problem: Take an array and find its median.
Example: [1, 3, 2, 4, 5] → 3
*/

/*
49. Find Mode of Array
Problem: Take an array and find its mode (most frequent element).
Example: [1, 3, 3, 2, 4, 5] → 3
*/

/*
50. Check if Array is Sorted
Problem: Take an array and determine if it is sorted in ascending order.
Example: [1, 2, 3, 4] → True, [3, 2, 1] → False
*/
