// https://www.acmicpc.net/problem/9012

// 괄호


// 스택을 이용한 풀이

const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const len = inputs.shift();

for (let i=0; i < len; i++) {
  const stack = [];
  let VPS = true;

  for (let j=0; j < inputs[i].length; j++) {
    if (inputs[i][j] == "(") stack.push("(");
    else {
      if (stack[stack.length-1]) stack.pop();
      else {
        VPS = false;
        break;
      }
    }
  }

  VPS && !stack.length ? console.log("YES") : console.log("NO");
}

// 스택을 이용하지 않은 풀이
const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const len = inputs.shift();

for (let i=0; i < len; i++) {
  let count = 0;
    
  for (let j=0; j < inputs[i].length; j++) {
    if (inputs[i][j] == "(") count++;
    else count--;
      
    if (count < 0) break;
  }
    
  count === 0 ? console.log("YES") : console.log("NO");
}