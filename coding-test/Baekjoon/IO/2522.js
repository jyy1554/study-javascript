// https://www.acmicpc.net/problem/2522

// 별 찍기 - 12

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

for (let i=1; i <= input; i++) {
    console.log(' '.repeat(input-i) + '*'.repeat(i));
}

for (let i=1; i < input; i++) {
    console.log(' '.repeat(i) + '*'.repeat(input-i));
}