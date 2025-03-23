// https://www.acmicpc.net/problem/1874

// 스택 수열

const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => +v);
const len = inputs.shift();

const stack = [];
const result = [];
let n = 1;
let number = true;

for (let i=0; i < len; i++) {
  for (n; n <= inputs[i]; n++) {
    stack.push(n);
    result.push("+");
  }

  do {
    result.push("-");
    number = stack.pop() || false;
  } while(number && number !== inputs[i]);

  if (!number) break;
}

number ? console.log(result.join("\n")) : console.log("NO");

