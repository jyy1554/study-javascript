// https://programmers.co.kr/learn/courses/30/lessons/12921

// 소수 찾기


function solution(n) {
  let answer = 0;    // 소수 넣는 배열
  let arr = [];       // 2부터 n까지 채우는 배열
  
  // 0부터 n으로 arr 배열 채우기
  for(let i=0; i <= n; i++) {
      arr.push(i);
  }
  
  //0과 1은 소수가 아니므로 0으로 바꾸기
  arr.splice(0,2,0,0);
  

  for(let i=2; i < arr.length; i++) {
      if(arr[i]) {
          for(let j=2; j*i <= n; j++) {
              arr[i*j] = 0;
          }
      }
  }
  
  answer = arr.filter(v => v != 0).length;
  
  return answer;
}