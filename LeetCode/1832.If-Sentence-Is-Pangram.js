/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  // 입력 : 소문자로 된 영어 문장
  // 반환 : 문장이 pangram인지 (알파벳이 최소 한번씩 포함 되었는지)
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (const char of alphabet) {
    if (!sentence.includes(char)) {
      return false;
    }
  }

  return true;
};
