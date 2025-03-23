// https://programmers.co.kr/learn/courses/30/lessons/12940

// 최대공약수와 최소공배수

//나의 풀이
function solution(n, m) {
  var answer = [];
  let smaller = n <= m ? n : m; // n과 m 중 작은값
  
  while (smaller) {
      if (!(n % smaller) && !(m % smaller)) { // 나누어 떨어질 때
          answer.push(smaller);
          answer.push(n * m / smaller);
          return answer;
      }
      else { // 나누어 떨어지지 않는 경우, 나누는 값을 1씩 감소
          smaller--;
      }
  }
      
}