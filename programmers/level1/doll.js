// https://programmers.co.kr/learn/courses/30/lessons/64061

// 크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0;
  var basket = [];
  let index = 0;
  
  //인형 뽑기
  while (moves.length) {
      const move = moves.shift();
      for(let i=0; i < board.length; i++) {
          //뽑은 인형이 0이 아닐 경우
          if(board[i][move-1]) {
              basket.push(board[i][move-1]);
              board[i][move-1] = 0;
              break;
          }
      }
  }
  
  //바구니에서 동일한 인형 없애기
  while (index < basket.length - 1) {
      if(basket[index] == basket[index + 1]) {
          answer += 2;
          basket.splice(index,2);
          index = 0;  // 처음부터 다시 확인
      }
      else index++;
  }
  
  return answer;
}


// 다른 풀이 - 바구니에 넣기전에 동일한 인형 처리
function solution(board, moves) {
  var answer = 0;
  var stack = [];
  
  while (moves.length) {
      const move = moves.shift()-1;
      for(let i=0; i < board.length; i++) {
          if(board[i][move] != 0) {
              if(stack[stack.length-1] == board[i][move]) {
                  answer += 2;
                  stack.pop();
              }
              else {
                  stack.push(board[i][move]);
              }
              board[i][move] = 0;
              break;
          }
      }
  }
  
  
  return answer;
}