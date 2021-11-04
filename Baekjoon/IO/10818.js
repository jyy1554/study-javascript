// https://www.acmicpc.net/problem/10818

// 합

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')[1].split(' ');

input = input.map(v => +v);
input = input.sort((a,b) => a < b ? -1 : 1);

console.log(input[0] + ' ' + input[input.length-1]);