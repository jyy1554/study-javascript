// https://www.acmicpc.net/problem/11720

// 숫자의 합

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sum = input[1].split('').reduce((acc, cur) => acc += (+cur),0);
console.log(sum);
