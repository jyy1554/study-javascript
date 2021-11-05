// https://www.acmicpc.net/problem/2445

// 별 찍기 - 8

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

for (let i=1; i <= input; i++) {
    stars = '*'.repeat(i) + ' '.repeat(input-i);
    stars += stars.split('').reverse().join('');
    console.log(stars);
}

for (let i=1; i < input; i++) {
    stars = '*'.repeat(input-i) + ' '.repeat(i);
    stars += stars.split('').reverse().join('');
    console.log(stars);
}
