// https://programmers.co.kr/learn/courses/30/lessons/49994#

// 방문 길이

function solution(dirs) {
  let pos = [0,0];
  let new_pos = [0,0];
  const coors = [];
  
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
      
      if (pos[0] == new_pos[0] && pos[1] == new_pos[1]) {} //pass
      else if (!coors.includes(pos+","+new_pos)) {
          coors.push(pos + "," + new_pos);
          coors.push(new_pos + "," + pos);
      }

      new_pos.filter((v,i) => pos[i] = v);    // 현재 좌표 바꾸기
  }
  
  return coors.length / 2;
}