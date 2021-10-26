// https://programmers.co.kr/learn/courses/30/lessons/49994#

// 방문 길이

function solution(dirs) {
  let pos = [0,0];
  let new_pos = [0,0];
  const coors = [];
  
  coors.push(pos+""); //우선, 시작점 (0,0) 넣기
  
  // 최대 5, 최소 -5
  for (let i=0; i < dirs.length; i++) {
      if (dirs[i] == "U") {
          new_pos[1] = pos[1] >= 5 ? 5 : (pos[1] + 1);
      }
      else if (dirs[i] == "D") {
          new_pos[1] = pos[1] <= -5 ? -5 : (pos[1] - 1);
      }
      else if (dirs[i] == "R") {
          new_pos[0] = pos[0] >= 5 ? 5 : (pos[0] + 1);
      }
      else {  //"L"일때
          new_pos[0] = pos[0] <= -5 ? -5 : (pos[0] - 1);
      }
       
      if (!coors.includes(new_pos+"")) coors.push(new_pos+"");
      else if (Math.abs(coors.indexOf(pos+"") - coors.indexOf(new_pos+"")) <= 1); // pass
      else coors.push(new_pos+"");
      
      new_pos.filter((v,i) => pos[i] = v);    // 현재 좌표 바꾸기
  }
  
  return coors.length - 1;    //길이이므로 (0,0) 제외
}