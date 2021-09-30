// https://programmers.co.kr/learn/courses/30/lessons/12943

// 콜라츠 추측

function solution(num) {
  var answer = 0;
  
  while (answer != 500 && num != 1) {
      if (num % 2) num = num * 3 + 1;
      else num /= 2;
  
      answer++;
  }
  
  answer = answer == 500 ? -1 : answer;
  
  return answer;
}