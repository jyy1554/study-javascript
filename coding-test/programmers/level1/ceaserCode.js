// https://programmers.co.kr/learn/courses/30/lessons/12926

// 시저 암호

function solution(s, n) {
  var answer = '';
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  for(let i=0; i < s.length; i++){
      const ch = s.charAt(i); // "a"
      
      if (ch == " ") answer += " ";
      else {
          let letterIndex = LETTERS.indexOf(ch.toUpperCase()) + n;
          letterIndex = letterIndex > LETTERS.length - 1 ? letterIndex - LETTERS.length : letterIndex;
          
          if (ch == ch.toUpperCase()) answer += LETTERS[letterIndex];
          else answer += LETTERS[letterIndex].toLowerCase();
      }
  }
  
  return answer;
}