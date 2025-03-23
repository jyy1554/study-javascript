// https://www.acmicpc.net/problem/2558

// A+B - 2

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const [a,b] = input.split('\n');

console.log((+a) + (+b));