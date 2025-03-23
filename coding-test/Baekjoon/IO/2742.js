// https://www.acmicpc.net/problem/2742

// 기찍 N

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

let answer = '';

for(let i=0; i < input; i++) {
    answer += (input-i);
    answer += '\n';
}

console.log(answer);