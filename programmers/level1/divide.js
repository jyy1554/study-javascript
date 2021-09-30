// https://programmers.co.kr/learn/courses/30/lessons/12940

// 최대공약수와 최소공배수

//나의 풀이
function solution(n, m) {
  var answer = [];
  const bigger = n >= m ? n : m;
  const smaller = n <= m ? n : m;
  let divideBy = smaller;
  
  while (divideBy) {
      if (!(bigger % divideBy) && !(smaller % divideBy)) { // 나누어 떨어질 때
          answer.push(divideBy);
          answer.push(bigger * smaller / divideBy);
          return answer;
      }
      else {
          divideBy--;
      }
  }
}