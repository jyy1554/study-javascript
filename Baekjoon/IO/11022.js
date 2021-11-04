// https://www.acmicpc.net/problem/11022

// A+B - 8

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = input.shift();
for(let i=0; i < len; i++) {
    const [a,b] = input[i].split(' ');
    
    console.log(`Case #${i+1}: ${+a} + ${+b} = ${(+a) + (+b)}`);
}