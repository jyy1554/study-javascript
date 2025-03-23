// https://programmers.co.kr/learn/courses/30/lessons/60057

//문자열 압축 - 보류

function solution(s) {
  let words = [];
  let same = [];
  let answer = [];
  
  // n단위로 잘라서 -> 계속 substring -> 자른 단어의 길이가 0일때까지
  // 앞과 같으면 words 배열에 추가X
  // 어떤 단어들이 중복되었는지 same 배열에 넣기 (중복허용X)
  for (let i=1; i < s.length; i++) { //n단위로 자르기
      for (let j=0; j < s.length; j += i) {
          const word = s.substring(j, j+i);
          if(word.length == 0) break;
          else if (words[words.length-1] != word) words.push(word);
          else if (words[words.length-1] == word && !same.includes(word)) same.push(word);
      }
      answer.push(words.join('').length + same.length);
      
      words = [];
      same = [];
  }
  
  return Math.min(...answer);
}