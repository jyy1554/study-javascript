// https://programmers.co.kr/learn/courses/30/lessons/12924

// 숫자의 표현

function solution(n) {
  let answer = 0;
  
  //자연수를 계속 더하나, n보다 커지면 break;
  // i는 n까지
  for (let i=1; i <= n; i++) {
      let sum = 0;
      for(let j=i; sum <= n; j++) {
          sum += j;
          if (sum == n) answer++;
      }
  }
  
  return answer;
}