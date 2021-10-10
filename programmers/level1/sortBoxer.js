// https://programmers.co.kr/learn/courses/30/lessons/85002

//6주차_복서 정렬하기


function solution(weights, h2h) {
  let answer = [];
  const prob = [];
  
  // 전체 승률이 높은 복서의 번호가 앞쪽으로 감. 안싸워본 복서는 0%
  // 승률이 동일한 복서 : 자신보다 무거운 복서를 이긴 횟수가 더 많은 복서를 앞으로
  //                   -> 위와도 동일하면 자기 몸무게가 무거운 복서가 앞으로
  //                   -> 몸무게도 동일하면 작은번호가 앞으로
  // 자기 자신은 N, 안싸워본 경우도 N
  
  // 승률 구하기 = w 개수 / N 제외한 개수
  for(let i=0; i < h2h.length; i++) {
      const info = h2h[i].split('');
      prob[i] = info.filter(v => v == 'W').length / info.filter(v => v != 'N').length || 0;   // 좌측이 false면 0 리턴
  }
  console.log(prob);
  
  
  // 동일할 경우
  
  
  
  
  return answer;
}