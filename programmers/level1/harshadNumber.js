// https://programmers.co.kr/learn/courses/30/lessons/12947

// 하샤드 수

function solution(x) {
  var answer = true;
  const str = x.toString();
  const arr = str.split('');
  let sum = 0;
  
  for(let i=0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
  }
  
  if(x % sum == 0) answer = true;
  else answer = false;

  return answer;
}