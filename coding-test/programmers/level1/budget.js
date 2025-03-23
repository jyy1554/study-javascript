// https://programmers.co.kr/learn/courses/30/lessons/12982

// 예산

function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  
  //sort는 숫자를 제대로 정렬하지 못한다!!
  d.sort((a,b) => a-b); //오름차순
  console.log(d);
  
  for(let i=0; i < d.length; i++) {
      sum += d[i];
      if(sum <= budget) answer++;
      else break;
  }
  
  return answer;
}