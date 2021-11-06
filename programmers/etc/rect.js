// 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하는 코드

function solution(v) {
  let answer = [];
  let x_axis = [];
  let y_axis = [];
  
  for (let i=0; i < v.length; i++) {
      const x = v[i][0];
      const y = v[i][1];
      
      if (x_axis.includes(x) == false) x_axis.push(x);
      else x_axis.splice(x_axis.indexOf(x),1);
      
      if (y_axis.includes(y) == false) y_axis.push(y);
      else y_axis.splice(y_axis.indexOf(y),1);
  }
  
  answer.push(x_axis.pop());
  answer.push(y_axis.pop());

  return answer;
}