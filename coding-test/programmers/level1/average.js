// https://programmers.co.kr/learn/courses/30/lessons/12944

// 평균 구하기

function solution(arr) {
  var answer = 0;
  
  arr.forEach(item => answer += item );
  answer = answer / arr.length;
  
  return answer;
}