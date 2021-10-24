// https://programmers.co.kr/learn/courses/30/lessons/49993

// 스킬 트리

function solution(skill, skill_trees) {
  let answer = 0;
  
  // skill_trees[i]을 배열로 만들고, skill에 없는 것들은 지우기
  
  for (let i=0; i < skill_trees.length; i++) {
      const arr = skill_trees[i].split('').filter(v => skill.indexOf(v) != -1);
      
      if (arr.join("") === skill.substr(0,arr.length)) answer++;
  }
  
  return answer;
}