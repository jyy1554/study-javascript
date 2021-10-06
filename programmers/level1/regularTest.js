// https://programmers.co.kr/learn/courses/30/lessons/42840

// 모의고사

function solution(answers) {
  var answer = [0, 0, 0];
  const result = [];
  const student0 = [1, 2, 3, 4, 5];
  const student1 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student2 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const len0 = student0.length;
  const len1 = student1.length;
  const len2 = student2.length;
  
  for(let i=0; i < answers.length; i++) {
      const q = answers[i];
      if (student0[i % len0] == q) answer[0]++;
      if (student1[i % len1] == q) answer[1]++;
      if (student2[i % len2] == q) answer[2]++;
  }
  
  const maxNum = Math.max(answer[0], answer[1], answer[2]);
  
  for(let i=0; i < answer.length; i++) {
      if (answer[i] == maxNum) result.push(i+1);
  }
  
  return result;
} 
