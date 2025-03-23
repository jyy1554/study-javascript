//https://programmers.co.kr/learn/courses/30/lessons/81301

//숫자 문자열과 영단어


function solution(s) {
  let answer = '';
  let letters = '';
  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  for(let i=0; i < s.length; i++) {
      if ('0123456789'.includes(s[i])) answer += s[i];
      else {
          letters += s[i];
          if (num.indexOf(letters) == -1) continue;
          else {
              answer += num.indexOf(letters);
              letters = '';
          }
      }
  }
  
  return +answer;
}