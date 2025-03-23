// https://programmers.co.kr/learn/courses/30/lessons/76501

//음양 더하기

function solution(absolutes, signs) {
  var answer = 0;
  
  for (let i=0; i < signs.length; i++) {
      answer += absolutes[i] * (signs[i] == true ? 1 : -1);
  }
  
  return answer;
}