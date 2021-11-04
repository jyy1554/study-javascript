// https://www.acmicpc.net/problem/8393

// 합

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

input = (+input);

console.log(((input + 1)*input)/2);