// https://programmers.co.kr/learn/courses/30/lessons/70129

// 이진 변환 반복하기

function solution(s) {
  let answer = [0,0];
  let num = s;
  
  // n : 이진변환 횟수,   z : 제거된 0의 개수
  while (num != '1') {
      const new_num = num.split("").filter(v => +v != 0).join("");
      answer[0]++;
      answer[1] += num.length - new_num.length;
      
      num = (new_num.length).toString(2);
  }
  
  return answer;
}