// https://www.acmicpc.net/problem/2441

// 별 찍기 - 4

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

for (let i=input; i > 0; i--) {
    console.log(' '.repeat(input-i) + '*'.repeat(i));
} 