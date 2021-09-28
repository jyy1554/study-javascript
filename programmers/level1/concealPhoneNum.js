// https://programmers.co.kr/learn/courses/30/lessons/12948

//핸드폰 번호 가리기

function solution(phone_number) {
  var answer = '';
  const len = phone_number.length;
  
  for(let i=0; i < len - 4; i++) {
      answer += "*";
  }
  
  answer += phone_number.slice(len-4,len);
      
  return answer;
}