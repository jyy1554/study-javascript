// https://programmers.co.kr/learn/courses/30/lessons/12977

// 소수 만들기


function solution(nums) {
  let answer = [];
  let primeNumber = [];
  let max = 0;
  
  // nums에서 3개 요소를 더해서 나올 수 있는 경우의 수 모두 구하기
  // 내림차순으로 정렬
  // 최대값을 max로 할당
  for(let i=0; i < nums.length-2; i++) {
      for(let j=i+1; j < nums.length-1; j++) {
          for(let k=j+1; k < nums.length; k++) {
              answer.push(nums[i]+nums[j]+nums[k]);
          }
      }
  }
  answer.sort((a, b) => b-a);
  max = answer[0];
  
  
  // 0 ~ max의 숫자가 들어가는 배열을 만들기
  for (let i=0; i <= max; i++) {
      primeNumber.push(i);
  }
  
  // 소수가 아닌 수를 0으로 날리기
  primeNumber.splice(0,2,0,0); //소수가 아닌 0,1을 0으로 만들기
  for (let i=2; i <= max; i++) {
      for (let j=2; i*j <= max; j++) {
          primeNumber[i*j] = 0;            
      }
  }
  
  // 0 제외 후 소수만 남긴 배열 만들기 - filter
  primeNumber = primeNumber.filter(v => v != 0);
  console.log(primeNumber);
  
  // 1번에서 만든 배열의 요소들이 소수만 남긴 배열에 총 몇개있는지 확인해보기
  answer = answer.filter(v => primeNumber.indexOf(v) != -1);
  
  
  //answer 길이를 return하면 소수의 개수가 나옴
  return answer.length;
}