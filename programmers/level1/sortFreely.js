// https://programmers.co.kr/learn/courses/30/lessons/12915

// 문자열 내 마음대로 정렬하기

function solution(s, n) {
  var answer = [];
  var arr = [];   // s 리스트 안에 있는 단어들의 n번째 문자가 들어가는 배열
  let search = 0; 
  
  s.sort();   //n번째 인덱스가 동일할 경우, 사전순으로 배치하기 위해 미리 s를 sort함
  
  // n번째 문자 취합
  for(let i=0; i < s.length; i++) {
      arr.push(s[i].charAt(n));
  }
  arr.sort(); //arr를 올림차순으로 정렬

  
  while (s.length) {
      //arr 요소 순서에 맞춰 s 단어들을 배치
      if (arr[answer.length] == s[search].charAt(n)) {
          answer.push(s.splice(search,1)[0]);  //splice는 배열을 리턴하므로 해당 요소값을 줘야됨
          search = 0;
      }
      else search++;
  }
  
  return answer;
}
