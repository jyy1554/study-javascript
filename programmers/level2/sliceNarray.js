// https://programmers.co.kr/learn/courses/30/lessons/87390

// n^2 배열 자르기

function solution(n, left, right) {
  let row = [];
  let answer = [];
  let index = 0;
  let v = 0;
  
  // n = 4
  // [1 2 3 4]
  // [2 2 3 4]     = 이전행 [1 2 3 4] + [1 0 0 0]
  // [3 3 3 4]     = [2 2 3 4] + [1 1 0 0]
  // [4 4 4 4]     = [3 3 3 4] + [1 1 1 0]
  
  while (index <= right) {
      // 첫행
      if (index < n) {
          v = index + 1;
          row.push(v);
      }
      // 몇행 : Math.floor(index / n)  해당행의 몇번째 요소 : index % n 
      // 해당요소는 다음행에서 index % n < Math.floor면 1을 더함
      else {
          const elem = index % n;
          v = row [elem] + (elem < Math.floor(index / n));
          row[elem] = v;
      }
      
      // left와 right 사이에 있는 요소인 경우
      if (index >= left && index <= right) answer.push(v);
      
      index++;
  }
  
  return answer;
}