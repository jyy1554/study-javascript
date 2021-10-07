// https://programmers.co.kr/learn/courses/30/lessons/70128

// 내적

function solution(a, b) {
  var answer = 0;
  var arr = [];
  
  arr = a.map((v,i) => v*b[i]);
  arr.forEach(item => answer += item);
  
  return answer;
}


// 다른 풀이 - reduce 메소드 이용
function solution(a, b) {
  // return 메소드 : acc - 초기값 (뒤에 0으로 설정), cur - current value, i - index
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}
