// https://programmers.co.kr/learn/courses/30/lessons/12941

// 최솟값 만들기

function solution(A,B){

  //하나는 오름차순
  A.sort((a,b) => b-a);
  //하나는 내림차순
  B.sort((a,b) => a-b);

  return A.reduce((acc, cur, i) => acc += cur*B[i],0);
}