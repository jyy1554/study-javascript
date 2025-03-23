// https://programmers.co.kr/learn/courses/30/lessons/68935

//3진법 뒤집기

function solution(n) {
  let answer = 0;
  
  //3진법으로 바꾸기 -> 배열로 바꾸기 -> 앞뒤 반전
  n = n.toString(3).split('').reverse();
  console.log(n);
  
  //10진법으로 표현하기
  for (let i=0; i < n.length; i++) {
      answer += n[n.length-1-i] * Math.pow(3, i);
  }
  
  
  return answer;
}