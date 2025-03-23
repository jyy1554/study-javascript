// https://www.acmicpc.net/problem/2741

// N 찍기

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

let answer = '';

for(let i=0; i < input; i++) {
    answer += (i+1);
    answer += '\n';
}

console.log(answer);
