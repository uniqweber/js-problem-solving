/* Sum of Two Numbers
Problem: দুটি সংখ্যা যোগফল বের করুন।
Example: 5 + 3 → 8
*/

const towSum = (a, b) => a + b;

/* Even or Odd
Problem: একটি সংখ্যা দেওয়া হবে, এবং আপনাকে বলতে হবে সেটা even না odd।
Example: 4 → Even, 7 → Odd
*/

const isOddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

/* Find the Maximum Number
Problem: একটি অ্যারে দেওয়া হবে এবং আপনাকে তার মধ্যে সবচেয়ে বড় সংখ্যা খুঁজে বের করতে হবে।
Example: [1, 2, 3, 7, 5] → 7
*/

const findMaxNum = (arr) => Math.max(...arr);

/* Sum of Digits
Problem: একটি পূর্ণসংখ্যা দেওয়া হবে, এবং আপনাকে তার সব ডিজিট যোগ করতে হবে।
Example: 123 → 1 + 2 + 3 = 6
*/

const sumOfDigits = (digits) => {
  const totalOfDigits = digits
    ?.toString()
    .split("")
    .reduce((prev, curr) => Number(prev) + Number(curr));
  return totalOfDigits;
};

/* Count Vowels in a String
Problem: একটি স্ট্রিং দেওয়া হবে, এবং আপনাকে এতে মোট কতটি ভাওয়েল (a, e, i, o, u) আছে সেটা গণনা করতে হবে।
Example: "hello" → 2 (e, o)
*/

const countVowelInStr = (str) => {
  let count = 0;
  const vowels = "aeiou";
  [...str].forEach((char) => vowels.includes(char) && count++);
  return count;
};

/* Find the Length of a String
Problem: একটি স্ট্রিং দেওয়া হবে, এবং আপনাকে সেটির দৈর্ঘ্য বের করতে হবে।
Example: "hello" → 5
*/

const strLength = (str = "hello") => str.length;

/* Prime Number Check
Problem: একটি সংখ্যা দেওয়া হবে, এবং আপনাকে যাচাই করতে হবে সেটা প্রাইম (যে সংখ্যা শুধুমাত্র ১ এবং নিজের দ্বারা ভাগ হয়) কিনা।
Example: 7 → True, 8 → False
*/

const checkPrimeNum = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count === 2;
};


/* Reverse a String
Problem: একটি স্ট্রিং দেওয়া হবে, এবং আপনাকে সেটি উল্টে দিতে হবে।
Example: "hello" → "olleh"
*/

const reverseStr = (str = "hello")=> str.split("").reverse().join("");

/* Find the Average of Numbers
Problem: একটি অ্যারে দেওয়া হবে, এবং আপনাকে তার গড় (average) বের করতে হবে।
Example: [2, 4, 6, 8] → 5
*/



/* Check Palindrome

Problem: একটি স্ট্রিং দেওয়া হবে, এবং আপনাকে যাচাই করতে হবে সেটি প্যালিনড্রোম (যা উল্টানো হলে নিজেই হয়) কি না।
Example: "madam" → True, "hello" → False
*/
