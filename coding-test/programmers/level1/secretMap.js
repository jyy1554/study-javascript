// https://programmers.co.kr/learn/courses/30/lessons/17681

// 비밀지도

/* 추천하는 풀이 */
function solution(n, arr1, arr2) {
    // 어느 하나라도 벽인 부분은 전체 지도에서도 벽("#", 1)
    let answer = [];
    
    for(let i=0; i < n; i++) {
        let binary1 = '';
        let binary2 = '';
        let binary = '';
        
        binary1 = addZero(n, decimalToBinary(arr1[i]));
        binary2 = addZero(n, decimalToBinary(arr2[i]));
          
        for(let j=0; j < n; j++) {
            if(binary1.charAt(j) != '0' || binary2.charAt(j) != '0') binary += '#';
            else binary += ' ';
        }
        
        answer.push(binary);
    }
    
    return answer;
  }
  
  const decimalToBinary = s => s.toString(2); // 2진수로 바꿔주는 메소드
  const addZero = (n, s) => '0'.repeat(n - s.length) + s;
  


/* 나의 첫 풀이 */

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



/* 나의 두번째 풀이 */

function n_binary(arr, n) {
  return arr.map(v => { 
      let binary = '';
      while (v) {
          binary = v % 2 + binary;    // 2진수의 뒷자리부터 계산되므로
          v = Math.floor(v / 2);  // 몫만 반환
      }
      
      while (binary.length != n) {
          binary = '0' + binary;
      }
      return binary;
  });
}

function solution(n, arr1, arr2) {
  // 어느 하나라도 벽인 부분은 전체 지도에서도 벽("#", 1)
  let answer = [];
  
  arr1 = n_binary(arr1, n);
  arr2 = n_binary(arr2, n);
  
  
  answer = arr1.map((v, i) => {
      let binary = '';
      for(let j=0; j < n; j++) {
          binary += +v.charAt(j) || +arr2[i].charAt(j) ? '#' : ' ';
      }
      return binary;
  });

  
  return answer;
}