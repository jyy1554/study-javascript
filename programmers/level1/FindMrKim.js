// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript

//서울에서 김서방 찾기

function solution(seoul) {
  var word = "Kim";
  var index = seoul.indexOf(word);
  var answer = `김서방은 ${index}에 있다`;
  return answer;
} 
