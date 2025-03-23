// https://programmers.co.kr/learn/courses/30/lessons/17682

// 다트 게임

function solution(dartResult) {
  //각 회차 점수를 저장할 배열 셋팅
  let result = [];
  let nth = 0;    // 몇 회차인지 확인
  
  //계산하여 result 배열에 각 회차 점수 추가
  for (let i=0; i < dartResult.length; i++) {
      const ch = dartResult[i];
      
      // 스타상
      if (ch == '*') {
          result[nth-1] *= 2;
          result[nth-2] *= 2;
      }
      // 아차상
      else if (ch == '#') result[nth-1] *= -1;
      else if ('SDT'.includes(ch))
          // *1을 해주는 이유는 number 타입으로 바꿔주기 위함
          result[nth-1] = ch == 'S' ? result[nth-1] * 1 : 
                      (ch == 'D' ? Math.pow(result[nth-1],2) : Math.pow(result[nth-1],3));
      // 숫자가 10으로 두자리수인 경우
      else if (ch == '0' && result[nth-1] == 1) result[nth-1] = 10;
      else {
          nth++;  //1회차, 2회차, 3회차
          result.push(ch);
      }
  }
  
  //마지막으로 result값 더해서 return
  return result.reduce((acc, cur) => acc + cur, 0);
}