// https://www.acmicpc.net/problem/11721

// 열 개씩 끊어 출력하기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

for (let i=0; i < input.length; i += 10) {
    console.log(input.substr(i, 10));
}