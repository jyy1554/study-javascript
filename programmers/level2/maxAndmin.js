// https://programmers.co.kr/learn/courses/30/lessons/12939

// 최댓값과 최솟값

function solution(s) {
  let answer = [];
  
  answer = s.split(" ").sort((a,b) => a-b);
  
  return `${answer[0]} ${answer[answer.length-1]}`;
} 
