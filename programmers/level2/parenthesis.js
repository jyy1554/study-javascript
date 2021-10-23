// https://programmers.co.kr/learn/courses/30/lessons/12909#

// 올바른 괄호


function solution(s){
    
  while (s.length) {
      const str = s.split("()").join("");  //()가 있으면 ()을 기준으로 분리한 배열을 return함
      
      if (s == str) break;
      else s = str;
  }
  
  return s.length == 0 ? true : false;
}