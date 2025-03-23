// https://programmers.co.kr/learn/courses/30/lessons/12933

//정수 내림차순으로 배치하기


function solution(n) {
  var answer = '';
  const arr = [];
  let maxNum = 0;
  
  while(n) {
      arr.push(n % 10);
      n = Math.floor(n / 10);
  }
  
  while(arr.length >= 1) {
      maxNum = Math.max(...arr);
      answer += maxNum;
      arr.splice(arr.indexOf(maxNum),1);
  }
  
  return Number(answer);
}