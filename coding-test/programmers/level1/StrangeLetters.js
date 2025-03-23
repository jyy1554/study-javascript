// https://programmers.co.kr/learn/courses/30/lessons/12930

// 이상한 문자 만들기

function solution(s) {
  var answer = '';
  const words = s.split(' '); // [try, hello, world]
  
  do{
      const letters = words.shift().split("");    // [t, r, y]
      for (let i=0; i < letters.length; i++) {
          if(i % 2 == 0) letters.splice(i, 1, letters[i].toUpperCase());
          else letters.splice(i, 1, letters[i].toLowerCase());
      }        
      answer += letters.join("");     // 'try'
      if (words.length >= 1) answer += " ";   //'try '
  }while(words.length);
  
  return answer;
}