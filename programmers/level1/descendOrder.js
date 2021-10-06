// https://programmers.co.kr/learn/courses/30/lessons/12917#

// 문자열 내림차순으로 배치하기

function solution(s) {
  var answer = '';
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const arr = [];
  
  for(let i=0; i < s.length; i++) {
      arr.push(alphabet.indexOf(s.charAt(i)));
  }

  arr.sort((a,b) => b-a)
  
  for(let i=0; i < arr.length; i++) {
      answer += alphabet.charAt(arr[i]);
  }
  
  return answer;
}
