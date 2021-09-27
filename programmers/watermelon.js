// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12922

//수박수박수박수박수박수?
function solution(n) {
  var answer = '';
  
  for (let i = 0; i < n; i++) {
      answer += i % 2 ? '박' : '수';
  }
  
  return answer;
}

/*   < 풀이 >
for문을 이용하여 구현하였고 i를 answer의 인덱스로 사용하였다.
*/