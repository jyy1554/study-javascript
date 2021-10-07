// https://programmers.co.kr/learn/courses/30/lessons/17681

// 비밀지도

function solution(n, arr1, arr2) {
  // 어느 하나라도 벽인 부분은 전체 지도에서도 벽("#", 1)
  var answer = [];
  
  for(let i=0; i < n; i++) {
      let binary1 = '';
      let binary2 = '';
      let binary = '';
      
      while (arr1[i]) {
          binary1 = arr1[i] % 2 + binary1;
          arr1[i] = Math.floor(arr1[i] / 2);  // 몫만 반환
      }
      while (arr2[i]) {
          binary2 = arr2[i] % 2 + binary2;
          arr2[i] = Math.floor(arr2[i] / 2);  // 몫만 반환
      }
      
      while (binary1.length != n) {
          binary1 = '0' + binary1;
      }
      while (binary2.length != n) {
          binary2 = '0' + binary2;
      }

      for(let j=0; j < n; j++) {
          if(+binary1.charAt(j) || +binary2.charAt(j)) binary += '#';
          else binary += ' ';
      }
      
      answer.push(binary);
  }
  
  return answer;
}