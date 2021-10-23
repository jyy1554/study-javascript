// https://programmers.co.kr/learn/courses/30/lessons/12909#

// 올바른 괄호


function solution(s){
  const stack = [];
  
  if (s[0] == ")" || s[s.length-1] == "(") return false;
  
  for (let i=0; i < s.length; i++) {
      if (s[i] === "(") stack.push(s.charAt(i));
      // ")"일 경우
      else if (stack.length == 0) return false;
      else stack.pop();
  }
  
  return stack.length == 0 ? true : false;
}