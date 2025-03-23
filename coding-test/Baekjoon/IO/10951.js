// https://www.acmicpc.net/problem/10951

// A+B - 4

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = input.length;
let i = 0;

while(input[i]) {
    const [a,b] = input[i].split(' ');
    
    console.log((+a) + (+b));
    i++;
}