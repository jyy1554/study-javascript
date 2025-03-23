// https://programmers.co.kr/learn/courses/30/lessons/42888

// 오픈채팅방

function solution(record) {
  let result = [];
  let users = {};
  
  for (let i=0; i < record.length; i++) {
      const msg = record[i].split(" ");
      if (msg[0] == "Enter") {
          users[msg[1]] = msg[2];
      }
      else if (msg[0] == "Change") {  // change
          users[msg[1]] = msg[2];
      }
  }
  
  for (let i=0; i < record.length; i++) {
      const msg = record[i].split(" ");
      if (msg[0] == "Enter") {
          result.push(enter(users[msg[1]]));
      }
      if (msg[0] == "Leave") {
          result.push(leave(users[msg[1]]));
      }
  }
  
  
  return result;
}

function enter(nickname) {
  return `${nickname}님이 들어왔습니다.`;
}

function leave(nickname) {
  return `${nickname}님이 나갔습니다.`;
}