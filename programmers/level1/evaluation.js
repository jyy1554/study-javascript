// https://programmers.co.kr/learn/courses/30/lessons/83201

// 2주차_상호평가

/* 나의 첫 풀이 */
function solution(scores) {
  var answer = '';
  
  // n번째 학생이 받은 점수 = scores[0][i] + scores[1][i] + ...
  // 자기 자신의 점수가 유일한 최고점 or 유일한 최저점인지 판단
  // 유일한 최고/최저점이라면 제외하고 평균을 구함
  for (let i=0; i < scores.length; i++) {
      //i번째 학생이 받은 점수
      const my_score = scores[i][i];
      let aver = 0;
      let max = my_score;
      let min = my_score;
      
      for (let j=0; j < scores.length; j++) {
          const score = scores[j][i];
          aver += score;
          if (i != j) {
              max = max == score ? 1000 : (max > score ? max : score);
              min = min == score ? 0 : (min < score ? min : score);
          }
      }
      
      if (my_score == max || my_score == min) aver = (aver - my_score) / (scores.length -1);
      else aver /= scores.length;
      
      console.log(max, min, aver);
      
      answer += aver >= 90 ? 'A' : (aver >= 80 ? 'B' : (aver >= 70 ? 'C' : (aver >= 50 ? 'D' : 'F')));
  }
  
  return answer;
}


/* 두번째 풀이 */

function solution(scores) {
  var answer = '';
  
  // n번째 학생이 받은 점수 = scores[0][i] + scores[1][i] + ...
  // 자기 자신의 점수가 유일한 최고점 or 유일한 최저점인지 판단
  // 유일한 최고/최저점이라면 제외하고 평균을 구함
  for (let i=0; i < scores.length; i++) {
      //i번째 학생이 받은 점수
      const score = [];
      const myScore = scores[i][i];
      let aver = 0;
      
      for (let j=0; j < scores.length; j++) {
          score.push(scores[j][i]);
      }
      
      // 내림차순 정렬
      score.sort((a,b) => b-a); 
      
      // 자신을 평가한 점수가 유일한 최고점 또는 유일한 최저점일 경우
      if(myScore == score[0] && score[0] != score[1]) score.shift();
      else if (myScore == score[score.length-1] && score[score.length-1] != score[score.length-2]) score.pop();
      
      aver = score.reduce((acc, cur) => acc + cur,0) / score.length;
      
      answer += aver >= 90 ? 'A' : (aver >= 80 ? 'B' : (aver >= 70 ? 'C' : (aver >= 50 ? 'D' : 'F')));
  }
  
  return answer;
}