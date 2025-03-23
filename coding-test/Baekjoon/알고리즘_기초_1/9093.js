// https://www.acmicpc.net/problem/9093

// 단어 뒤집기


// 스택을 사용하지 않은 풀이

const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const len = inputs.shift();
const result = [];

for (let i=0; i < len; i++) {
  inputs[i].split(" ").forEach(word => result.push(word.split("").reverse().join("")));
}

console.log(result.join("\n"));


// 스택을 사용한 풀이

const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const len = inputs.shift();
for (let i=0; i < len; i++) {
    let answer = '';
    const stack = [];
    
    inputs[i].split(" ").forEach(word => {
        for (let j=0; j < word.length; j++) {
            stack.push(word[j]);
        }
        for (let j=0; j < word.length; j++) {
            answer += stack.pop();
        }
        answer += ' ';
    });
    
    console.log(answer);
}