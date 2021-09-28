// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

// 가운데 글자 가져오기

function solution(s) {
  var len = s.length;
  var answer = len % 2 ? s[(len-1)/2] : s.slice((len/2)-1,(len/2)+1);
  return answer;
}

/*   < 풀이 >
삼항 조건 연산자를 이용하여 구현하였다. s.length를 자주 사용하여 변수로 지정해줬다.
len % 2가 참일 경우, 즉 홀수일 경우와 len % 2가 거짓일 경우, 즉 짝수일 경우를 나눠줬다.
글자를 뽑아내는건 slice(시작점, 미포함 끝점) 메소드를 사용했다.
*/ 
