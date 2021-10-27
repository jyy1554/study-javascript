// https://programmers.co.kr/learn/courses/30/lessons/87390

// n^2 배열 자르기

function solution(n, left, right) {
  let row = 0;
  let answer = [];
  let index = 0;
  let v = 0;
  
  // n = 4
  // 0행 : [1 2 3 4]
  // 1행 : [2 2 3 4]     = 이전행 [1 2 3 4] + [1 0 0 0]
  // 2행 : [3 3 3 4]     = [2 2 3 4] + [1 1 0 0]
  // 3행 : [4 4 4 4]     = [3 3 3 4] + [1 1 1 0]
  
  while (index <= right) {
      // 첫행
      if (index < n) {
          v = index + 1;
      }
      // 행 : Math.floor(index / n)    
      // n = 1(2번째행),2(3번째행),3,...
      else if (index % n <= Math.floor(index / n)) {
          v = Math.floor(index / n) + 1;
      }
      else {
          v = index % n + 1;
      }
      
      
      // left와 right 사이에 있는 요소인 경우
      if (index >= left && index <= right) answer.push(v);
      
      index++;
  }
  
  return answer;
}

