//https://programmers.co.kr/learn/courses/30/lessons/12916

//문자열 내 p와 y의 개수


function solution(s){
  let pNum = 0;
  let yNum = 0;
  const arr = s.toLowerCase().split('');

  for(let i=0; i < arr.length; i++) {
      if (arr[i] == 'p') pNum++;
      else if (arr[i] == 'y') yNum++;
  }

  return pNum == yNum;
}