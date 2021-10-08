// https://programmers.co.kr/learn/courses/30/lessons/77884

// 약수의 개수와 덧셈


/* 좋은 풀이 */
function solution(left, right) {
  var answer = 0;
  
  //약수의 개수가 홀수인 경우, 루트를 씌웠을 때 정수인 경우
  for (let i = left; i <= right; i++) {
      if (Math.sqrt(i) == Math.floor(Math.sqrt(i))) answer += -i;
      else answer += i;
  }
  
  return answer;
}



/* 나의 첫 풀이 */

function solution(left, right) {
  var answer = 0;
  
  //각 수 약수의 개수 구하기 => 1부터 나눠서 나누어떨어지면 배열에 추가
  //개수가 짝수이면 더하고, 홀수이면 빼기
  for (let i = left; i <= right; i++) {
      const arr = [];
      for (let j=1; j <= i; j++) {
          if(i % j == 0) arr.push(j);
      }
      answer += arr.length % 2 == 0 ? i : -i;
  }
  
  return answer;
}