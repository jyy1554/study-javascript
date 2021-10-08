// https://programmers.co.kr/learn/courses/30/lessons/86051

// 없는 숫자 더하기


function solution(numbers) {
  var answer = 0;
  
  //없는 수를 모두 찾아 더한수를 return
  for(let i=0; i < 10; i++) {
      if(!numbers.includes(i)) answer += i;
  }
  
  return answer;
}