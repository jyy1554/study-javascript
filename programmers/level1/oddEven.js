// https://programmers.co.kr/learn/courses/30/lessons/12937

// 짝수와 홀수

function solution(num) {
  var answer = '';
  answer = num % 2 == 0 ? 'Even' : 'Odd';
  return answer;
}