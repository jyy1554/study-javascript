// https://programmers.co.kr/learn/courses/30/lessons/12951

// JadenCase 문자열 만들기

function solution(s) {
  let answer = [];
  
  answer = s.split(" ");
  for (let i=0; i < answer.length; i++) {
      answer[i] = answer[i].substring(0,1).toUpperCase() + answer[i].substring(1, answer[i].length).toLowerCase();
  }
  
  return answer.join(" ");
}