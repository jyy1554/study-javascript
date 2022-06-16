/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //usually written largest to smallest from left to right

  //MCMXCIV
  // 1000 -> 100 -> 1000 -> 10 -> 100 -> 1 -> 5
  // 1000 + (-100) + 1000 + (-10) + 100 + (-1) + 5 다음숫자를 확인하고 부호 결정
  let result = 0;
  const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const curNum = romanNum[s[i]];
    const nextNum = romanNum[s[i + 1]];

    if (!nextNum || curNum >= nextNum) {
      result += curNum;
    } else {
      result -= curNum;
    }
  }

  return result;
};
