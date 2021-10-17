// https://programmers.co.kr/learn/courses/30/lessons/12949

// 행렬의 곱셈

function solution(arr1, arr2) {
  let answer = [[]];
  
  for (let i=0; i < arr1.length; i++) {
      let sum = 0;
      for (let j=0; j < arr1[i].length; j++) {
          
          answer[i][j] = arr1[i][j] +  ;
      }
  }
  
  return answer;
}

행 * 열  = 첫번째 따라가는듯   00 = 00*00 + 01*10, 01 = 00*01 + 01*11
                          10 = 10*00 + 11*10, 11 = 10*01 + 11*11
                          20
1 4     3 3
3 2     3 3 
4 1