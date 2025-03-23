// https://programmers.co.kr/learn/courses/30/lessons/12949

// 행렬의 곱셈


function solution(arr1, arr2) {
  const answer = [];
  const size = [arr1.length, arr2[0].length]; // 최종 행렬의 크기

  for (let i=0; i < size[0]; i++) {
      const arr = [];
      for (let j=0; j < size[1]; j++) {
          let sum = 0;
          for (let k=0; k < arr2.length; k++) {
              sum += arr1[i][k] * arr2[k][j];
          }
          arr.push(sum);
      }
      answer.push(arr);
  }
  
  return answer;
}

// '3'*2  2*'2'   => 3*2
// arr1 행 * arr2 열  = 첫번째 따라가는듯   
// 00 = 00*00 + 01*10, 01 = 00*01 + 01*11
// ij = i0(arr1[0] 요소 개수)*0(arr2의 행의 개수)j + i1*1j / ij = i0*0j + i1*1j
// 10 = 10*00 + 11*10, 11 = 10*01 + 11*11

// 20
// 1 4     3 3
// 3 2     3 3 
// 4 1