// https://programmers.co.kr/learn/courses/30/lessons/12954

// x만큼 간격이 있는 n개의 숫자


function solution(x, n) {
  var answer = [];
  
  for (let i=0; i < n; i++) {
      answer.push(x*(i+1));
  }
  
  return answer;
}