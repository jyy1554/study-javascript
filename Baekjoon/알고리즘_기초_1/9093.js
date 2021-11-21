// https://www.acmicpc.net/problem/9093

// 단어 뒤집기

const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const len = inputs.shift();
const result = [];

for (let i=0; i < len; i++) {
  inputs[i].split(" ").forEach(word => result.push(word.split("").reverse().join("")));
}

console.log(result.join("\n"));