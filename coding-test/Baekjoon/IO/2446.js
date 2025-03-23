// https://www.acmicpc.net/problem/2446

// 별 찍기 - 9

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

for (let i=input; i > 0; i--) {
    console.log(' '.repeat(input-i) + '*'.repeat(2*i-1));
}

for (let i=2; i <= input; i++) {
    console.log(' '.repeat(input-i) + '*'.repeat(2*i-1));
}