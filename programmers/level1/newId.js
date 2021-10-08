// https://programmers.co.kr/learn/courses/30/lessons/72410

// 신규 아이디 추천


function solution(new_id) {
  let recommend = '';
  
  //1단계 : 소문자로 치환
  new_id = new_id.toLowerCase();
  
  
  //2단계 : 허용하지 않는 문자 제거
  for(let i=0; i < new_id.length; i++) {
      const ch = new_id.charAt(i);
      // 소문자 알파벳인 경우
      if (ch != ch.toUpperCase()) recommend += ch;
      // 숫자인 경우
      else if (ch == +ch) recommend += ch;
      // 허용되는 특수문자일 경우
      else if (ch == '-' || ch == '_' || ch == '.') recommend += ch;
      else continue;   
  }
  console.log('2단계: '+ recommend);
  
  
  //3단계 : . 2번 이상이면 하나의 마침표로 치환
  new_id = '';
  for(let i=0; i < recommend.length; i++) {
      if(new_id.charAt(new_id.length-1) == '.' && recommend.charAt(i) == '.') continue;
      else new_id += recommend.charAt(i);
  }
  recommend = new_id;
  console.log('3단계: '+ recommend);
  
  
  //4단계: .이 처음이나 끝일 경우 제거
  if(recommend.charAt(0) == '.') recommend = recommend.substring(1,recommend.length);
  if(recommend.charAt(recommend.length-1) == '.') recommend = recommend.substring(0,recommend.length-1);
  console.log('4단계: '+ recommend);
  
  
  //5단계 : 빈문자열일 경우, a를 대입
  if(recommend.length == 0) recommend = 'a';
  console.log('5단계: '+ recommend);
  
  
  //6단계 : 길이가 16자 이상이면 15자로 자르고, 제거 후 마지막이 .일경우 제거
  if(recommend.length > 15) recommend = recommend.substring(0,15);
  if(recommend.charAt(recommend.length-1) == '.') recommend = recommend.substring(0,recommend.length-1);
  console.log('6단계: '+ recommend);
  
  
  //7단계 : 길이가 2자 이하 이면, 마지막 문자를 길이가 3이 될때까지 반복
  if(recommend.length < 3) recommend += recommend.charAt(recommend.length-1).repeat(3-recommend.length);
  console.log('7단계: '+ recommend);
  
  
  return recommend;
}