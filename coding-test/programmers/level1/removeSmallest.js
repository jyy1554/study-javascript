// https://programmers.co.kr/learn/courses/30/lessons/12935

// 제일 작은 수 제거하기

function solution(arr) {
  var answer = [];
  arr.forEach(item => answer.push(item));
  
  let smallest = arr.pop();
  let next = 0;

  if (smallest == undefined || arr.length == 0) answer = [-1];
  else {        
      do {
          next = arr.pop();
          if (next < smallest) smallest = next;
      }while(arr.length >= 1);
      
      answer.splice(answer.indexOf(smallest),1);
  }
  
  return answer;
}