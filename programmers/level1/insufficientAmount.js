//https://programmers.co.kr/learn/courses/30/lessons/82612

//1주차_부족한 금액 계산하기


function solution(price, money, count) {
  var answer = 0;
  
  //총액
  for(let i=0; i < count; i++) {
      answer += price * (i + 1);
  }
  
  answer = money > answer ? 0 : answer - money;

  return answer;
}