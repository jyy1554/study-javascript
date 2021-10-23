// https://programmers.co.kr/learn/courses/30/lessons/12909#

// 올바른 괄호

function solution(s){
  let answer = 0;
  
  // 첫 괄호와 마지막 괄호가 잘못되었을 경우
  if (s[0] === ")" || s[s.length-1] == "(") return false;
  
  // (개수와 )개수가 같은 경우
  for (let i=0; i < s.length; i++) {
      if (s[i] === "(") answer++;
      else answer--;
  }
  
  
  return answer = answer == 0 ? true : false;
}