// https://www.acmicpc.net/problem/10953

// A+B - 6

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = +input.shift();
for(let i=0; i < len; i++) {
    const [a,b] = input[i].split(',');
    
    console.log((+a) + (+b));
}