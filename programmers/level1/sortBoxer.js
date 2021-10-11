// https://programmers.co.kr/learn/courses/30/lessons/85002

//6주차_복서 정렬하기


/* 요소를 숫자 타입으로 변경하고 1씩 더하여 리턴하는 함수*/
function returnResult(arr) {
  return arr.map(v => v*1 + 1);
}

/* compare 배열을 기준으로 동일한 players들을 묶어주는 함수 */
function bindSame(players, compare) {
  const result = [];

  for (let i=0; i < players.length; i++) {
      if(compare[players[i-1]] != compare[players[i]]) result.push(players[i]);
      else result[result.length-1] += players[i];
  }

  return result;
};



/* Main 함수 */
function solution(weights, h2h) {
  const numberOfBoxers = weights.length;  // 복서 수
  const rank = [];    // 승률을 담는 배열
  const defeatHeavier = []; // 자신보다 무거운 선수를 이긴 횟수를 담는 배열
  let boxers1 = [];
  let boxers2 = [];
  
  
  
  /********* 1. 승률이 높을수록 앞으로 *********/
  for (let i=0; i < numberOfBoxers; i++) {
      boxers1.push(i+'');  //문자열로 바꿔주기 위해
      
      // 승률을 소수점 둘째자리까지만 표현
      rank[i] = Math.round( h2h[i].split('').filter(v => v == 'W').length 
              / h2h[i].split('').filter(v => v != 'N').length * 100) / 100 || 0;
  }
  
  //승률이 높은순으로 선수를 배열
  boxers1.sort((a,b) => rank[b] - rank[a]); 
  
  // 승률이 같은 복서끼리 묶어줌
  boxers1 = bindSame(boxers1, rank);
  
  // 정렬이 완전히 끝났다면.. 끝!
  if(boxers1.length == numberOfBoxers) return returnResult(boxers1);
  
  /****************************************/
  
  
  
  
  /********* 2. 자신보다 무거운 복서를 이긴 횟수가 많을수록 *********/
  // 자신보다 무거운 복서를 이긴 횟수 구하기
  for (let i=0; i < numberOfBoxers; i++) { 
      defeatHeavier[i] = h2h[i].split('').reduce((acc, cur, index) => {
          if (cur == "W" && weights[i] < weights[index]) acc++;
          return acc;
      }, 0);
  }
  
  // 이긴 횟수 순으로 승률이 동일한 복서들을 정렬
  for (let i=0; i < boxers1.length; i++) { 
      const group = boxers1[i].split('');
      let new_group = [];
      
      group.sort((a,b) => defeatHeavier[b] - defeatHeavier[a]);
      
      // 이긴 횟수가 같은 놈들끼리 묶기
      new_group = bindSame(group, defeatHeavier);
      new_group.forEach(item => boxers2.push(item));
  }
  

  // 정렬이 완전히 끝났다면.. 끝!
  if(boxers2.length == numberOfBoxers) return returnResult(boxers2);
  
  /****************************************/
  
  
  
  
  /********* 3. 본인 몸무게가 무거운 사람이 앞으로 *********/
  // 본인 몸무게 순으로 이긴 횟수가 동일한 복서들을 정렬 
  boxers1 = [];
  for (let i=0; i < boxers2.length; i++) { // boxers = ['12','0']
      const group = boxers2[i].split('');   // [ '1', '2' ]      [ '0' ]
      let new_group = [];
      
      // 몸무게 무거운 순으로 정렬
      group.sort((a,b) => weights[b] - weights[a]);
      
      // 본인 몸무게가 같은 놈들끼리 묶기
      new_group = bindSame(group, weights);
      new_group.forEach(item => boxers1.push(item));
  }
  
  // 정렬이 완전히 끝났다면.. 끝!
  if(boxers2.length == numberOfBoxers) return returnResult(boxers1);
  
  /****************************************/
  
  
  
  /********* 4. 작은 번호 순으로  *********/
  // 작은 번호 순으로 몸무게가 동일한 복서들을 정렬
  boxers2 = [];
  for (let i=0; i < boxers1.length; i++) { // answer = [ '13', '2', '0' ]
      const group = boxers1[i].split('');   // [ '1', '3' ]      [ '2' ]
      
      // 번호 오름차순으로 정리 후 boxers1 배열에 넣기 
      group.sort((a,b) => a-b);
      group.forEach(item => boxers2.push(item));
  }
  // 정렬이 완전히 끝났다면.. 끝!
  if(boxers2.length == numberOfBoxers) return returnResult(boxers2);
  
  /****************************************/
  
}