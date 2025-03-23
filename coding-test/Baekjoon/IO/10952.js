// https://www.acmicpc.net/problem/10952

// A+B - 5

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i=0; i < input.length; i++) {
    const [a, b] = input[i].split(' ');
    
    if (+a === 0 && +b === 0) break;
    else console.log((+a) + (+b));
}