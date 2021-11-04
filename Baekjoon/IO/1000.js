// https://www.acmicpc.net/problem/1000

// A+B

//JavaScript에서 input을 받아오는 방법
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const [a,b] = input.split(" ");

console.log((+a) + (+b));