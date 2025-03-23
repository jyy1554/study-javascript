// https://www.acmicpc.net/problem/2440

// 별 찍기 - 3

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

for (let i=1; i <= input; i++) {
    console.log(' '.repeat(input-i) + '*'.repeat(i));
}