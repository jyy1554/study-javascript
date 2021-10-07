// https://programmers.co.kr/learn/courses/30/lessons/42889

// 실패율

function solution(N, stages) {
  var answer = [];
  var fail = [];  // 스테이지별 실패율 저장
  
  // 실패율 계산
  for(let i = 0; i < N; i++) {    // 레벨
      const stage = i + 1; 
      let unclear = 0;
      let players = 0;
      
      for(let j = 0; j < stages.length; j++) {
          // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
          if (stages[j] == stage) unclear++;
          // 스테이지에 도달한 플레이어 수
          if (stages[j] >= stage) players++;
      }
      
      players = players == 0 ? 1 : players;   // players가 0이면 0으로 나누게되어 NaN가 될수도
      
      fail.push(unclear / players);
      answer.push(i+1);   //answer에 우선 1~N 숫자를 채워놓기
  }

  //a,b 정렬은 실패율을 기준으로 오름차순 정렬
  return answer.sort((a,b) => fail[b-1] - fail[a-1]);
}