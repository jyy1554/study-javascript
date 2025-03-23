// https://programmers.co.kr/learn/courses/30/lessons/1845

// 폰켓몬

function solution(nums) {
  var answer = [];
  
  // 최대 가져갈 수 있는 개수 셋팅
  const maxNum = Math.floor(nums.length / 2);
  
  // nums에서 중복값 제거
  for (let i=0; i < nums.length; i++) {
      if(answer.indexOf(nums[i]) == -1) answer.push(nums[i]);
  }
  
  // 중복값 제거한 nums가 > 최대 개수 => 최대개수 return
  //  "                < 최대 개수 => nums.length 리턴
  if (answer.length >= maxNum) return maxNum;
  else return answer.length;

}