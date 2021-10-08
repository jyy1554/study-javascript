// https://programmers.co.kr/learn/courses/30/lessons/67256

// 키패드 누르기


function solution(numbers, hand) {
  // 2,5,8,0 : 가까운 엄지. 거리같다면 오른손잡이 - 오른속, 왼손잡이 - 왼손
  let result = '';
  const keypad = [[1,2,3], [4,5,6], [7,8,9], ['*',0,'#']];
  let leftPos = [3, 0];   // '*'
  let rightPos = [3, 2];  // '#'
  
  console.log(keypad.flat().indexOf('#')); // 11  => 나누기 3, 몫(행):3, 나머지(렬): 2
  
  // 위치 계산 함수
  for(let i=0; i < numbers.length; i++) {
      const num = numbers[i];
      
      if('147'.indexOf(num) != -1) {
          leftPos[0] = num == 1 ? 0 : (num == 4 ? 1 : 2);
          leftPos[1] = 0;
          result += 'L';
      }
      else if('369'.indexOf(num) != -1) {
          rightPos[0] = num == 3 ? 0 : (num == 6 ? 1 : 2);
          rightPos[1] = 2;
          result += 'R';
      }
      else {  //2580 크거나작거나 or 동일
          if (num == 2) {
              const leftDistance = Math.abs(0 - leftPos[0]) + Math.abs(1 - leftPos[1]);
              const rightDistance = Math.abs(0 - rightPos[0]) + Math.abs(1 - rightPos[1]);
              
              if (leftDistance < rightDistance) {
                  leftPos[0] = 0;
                  leftPos[1] = 1;
                  result += 'L';
              }
              else if (rightDistance < leftDistance) {
                  rightPos[0] = 0;
                  rightPos[1] = 1;
                  result += 'R';
              }
              else {
                  if(hand == "left") {
                      leftPos[0] = 0;
                      leftPos[1] = 1;
                      result += 'L';
                  }
                  else {
                      rightPos[0] = 0;
                      rightPos[1] = 1;
                      result += 'R';
                  }
              }
          }
          if (num == 5) {
              const leftDistance = Math.abs(1 - leftPos[0]) + Math.abs(1 - leftPos[1]);
              const rightDistance = Math.abs(1 - rightPos[0]) + Math.abs(1 - rightPos[1]);
              
              if (leftDistance < rightDistance) {
                  leftPos[0] = 1;
                  leftPos[1] = 1;
                  result += 'L';
              }
              else if (rightDistance < leftDistance) {
                  rightPos[0] = 1;
                  rightPos[1] = 1;
                  result += 'R';
              }
              else {
                  if(hand == "left") {
                      leftPos[0] = 1;
                      leftPos[1] = 1;
                      result += 'L';
                  }
                  else {
                      rightPos[0] = 1;
                      rightPos[1] = 1;
                      result += 'R';
                  }
              }
          }
          if (num == 8) {
              const leftDistance = Math.abs(2 - leftPos[0]) + Math.abs(1 - leftPos[1]);
              const rightDistance = Math.abs(2 - rightPos[0]) + Math.abs(1 - rightPos[1]);
              
              if (leftDistance < rightDistance) {
                  leftPos[0] = 2;
                  leftPos[1] = 1;
                  result += 'L';
              }
              else if (rightDistance < leftDistance) {
                  rightPos[0] = 2;
                  rightPos[1] = 1;
                  result += 'R';
              }
              else {
                  if(hand == "left") {
                      leftPos[0] = 2;
                      leftPos[1] = 1;
                      result += 'L';
                  }
                  else {
                      rightPos[0] = 2;
                      rightPos[1] = 1;
                      result += 'R';
                  }
              }
          }
          if (num == 0) {
              const leftDistance = Math.abs(3 - leftPos[0]) + Math.abs(1 - leftPos[1]);
              const rightDistance = Math.abs(3 - rightPos[0]) + Math.abs(1 - rightPos[1]);
              
              if (leftDistance < rightDistance) {
                  leftPos[0] = 3;
                  leftPos[1] = 1;
                  result += 'L';
              }
              else if (rightDistance < leftDistance) {
                  rightPos[0] = 3;
                  rightPos[1] = 1;
                  result += 'R';
              }
              else {
                  if(hand == "left") {
                      leftPos[0] = 3;
                      leftPos[1] = 1;
                      result += 'L';
                  }
                  else {
                      rightPos[0] = 3;
                      rightPos[1] = 1;
                      result += 'R';
                  }
              }
          }
      }
  }
  
  return result;
}
