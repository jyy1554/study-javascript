// https://programmers.co.kr/learn/courses/30/lessons/12910

// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  var answer = [];
  
  for(let i=0; i < arr.length; i++) {
      if(arr[i] % divisor == 0) answer.push(arr[i]);
  }
  
  answer = answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
  
  return answer;
}