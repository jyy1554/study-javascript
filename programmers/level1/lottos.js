// https://programmers.co.kr/learn/courses/30/lessons/77484

// 로또의 최고 순위와 최저 순위


function returnTier(match) {
  switch (match) {
      case 6: return 1;
          break;
      case 5: return 2;
          break;
      case 4: return 3;
          break;
      case 3: return 4;
          break;
      case 2: return 5;
          break;
      default: return 6;
  }
}


function solution(lottos, win_nums) {
  let result = [];
  let correctAndZero = [0,0];
  
  //lottos 요소를 win_nums와 하나씩 비교. 그러나, 0일 경우 보류
  for (let i=0; i < lottos.length; i++) {
      if (lottos[i] == 0) correctAndZero[1]++;
      else correctAndZero[0] += win_nums.includes(lottos[i]);
  }
  
  // 6개 맞으면 1티어, 5개 맞으면 2티어, ... 1개 이하는 6티어 - switch 
  // 티어를 result 넣기
  result.push(returnTier(correctAndZero[0] + correctAndZero[1]));
  result.push(returnTier(correctAndZero[0]));
  
  
  // 가장 높은 순위와 가장 낮은 순위를 return
  return result;
}