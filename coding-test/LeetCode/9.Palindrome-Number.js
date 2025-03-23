/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x + "";
  let reversedString = "";

  for (const char of str) {
    reversedString = char + reversedString;
  }

  return reversedString === str;
};
