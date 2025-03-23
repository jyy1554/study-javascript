// https://www.acmicpc.net/problem/11718

// 그대로 출력하기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

while(input.length) {
    console.log(input.shift());
}