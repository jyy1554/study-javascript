// https://www.acmicpc.net/problem/2438

// 별 찍기

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

for (let i=1; i <= input; i++) {
  console.log('*'.repeat(i));
}