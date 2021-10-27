// https://programmers.co.kr/learn/courses/30/lessons/87390

// n^2 배열 자르기

function solution(n, left, right) {
  let answer = [];
  
  // n = 4
  // [1 2 3 4]
  // [2 2 3 4]     = 이전행 [1 2 3 4] + [1 0 0 0]
  // [3 3 3 4]     = [2 2 3 4] + [1 1 0 0]
  // [4 4 4 4]     = [3 3 3 4] + [1 1 1 0]
  
  for (let i=0; i < n; i++) {
      if (i == 0) {
          for (let j=1; j <= n; j++) {
              answer.push(j);
              
              if (answer.length > right) break;
          }
      }
      else {
          const arr = answer.slice(answer.length-n, answer.length);
          for (let j=0; j < n; j++) {
              if (j < i) answer.push(arr[j] + 1);
              else answer.push(arr[j]);
              
              if (answer.length > right) break;
          }
      }
      
      if (answer.length > right) break;
  }

  return answer.slice(left, right+1);
}

