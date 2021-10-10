// https://programmers.co.kr/learn/courses/30/lessons/86491

//8주차_최소직사각형


function solution(sizes) {
  const widths = [];
  const heights = []
  
  //각 명함에서 w, h 중 큰 수를 w에 넣을꺼
  for(let i=0; i < sizes.length; i++) {
      if(sizes[i][0] < sizes[i][1]) sizes[i].reverse();
      widths.push(sizes[i][0]);
      heights.push(sizes[i][1]);
  }
  widths.sort((a,b) => b-a);
  heights.sort((a,b) => b-a);
  
  
  return widths[0]*heights[0];
}