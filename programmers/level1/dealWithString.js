// https://programmers.co.kr/learn/courses/30/lessons/12918

// 문자열 다루기 기본

function solution(s) {
  var answer = false;

  if (s.length == 4 || s.length == 6) {
      if(isNaN(+s) || s.includes(' ') || s.includes('e')) answer = false;
      else answer = true;
  }
  else answer = false;
  
  return answer;
}