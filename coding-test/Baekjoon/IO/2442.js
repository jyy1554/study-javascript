// https://www.acmicpc.net/problem/2442

// 별 찍기 - 5

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

for (let i=1; i <= input; i++) {
    console.log(' '.repeat(input-i) + '*'.repeat(2*i-1));
}