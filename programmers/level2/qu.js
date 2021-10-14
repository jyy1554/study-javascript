function solution(s) {
  let answer = 0;
  let words = [];
  let lengths = [];
  let same = [];
  
  //2a2ba3c
  
  // n단위로 잘라서 -> substring -> length가 0나올때까지
  // 앞과 같으면 없애서 최소숫자가 정답!
  
  for (let i=1; i < s.length; i++) { //n단위로 자르기
      let word = '';
      
      //substring으로 계속 넣기
      for (let j=0; j < s.length; j += i) {
          word = s.substring(j, j+i);
          if(word.length == 0) break;
          else if (words[words.length-1] != word) words.push(word);
          else if (words[words.length-1] == word && !words.includes(word)) same.push(word);
      }
      lengths.push(words.join('').length);
      console.log(words, same);
      
      words = [];
      same = [];
  }
  console.log(s.length, lengths);
  
  // 원래 길이 
  
  return answer;
}