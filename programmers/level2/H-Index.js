// https://programmers.co.kr/learn/courses/30/lessons/42747#

// H-Index

/* 아쉬운 풀이 */

function solution(citations) {
  let h = 0;
  
  // 0 <= h <= citations.length
  for (let i=0; i <= citations.length; i++) {
      const papers = citations.filter(v => v >= i);
      if (papers.length >= i) h = i;
      else break;
  }
  
  return h;
}