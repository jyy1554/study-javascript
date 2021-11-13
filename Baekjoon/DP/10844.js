// https://www.acmicpc.net/problem/10844

// 쉬운 계단 수

const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString();

let arr = [];

//2차 배열 만들기
for (let i=0; i < N; i++) {
  arr.push(Array(10).fill(0));
}

//N이 1일때,
for (let i=1; i < 10; i++) {
  arr[0][i] = 1;
}

for (let i=1; i < N; i++) {
  arr[i][0] = arr[i-1][1];
  arr[i][9] = arr[i-1][8];
  for (let j=1; j <= 8; j++) {
    arr[i][j] = (arr[i-1][j-1] + arr[i-1][j+1]) % 1000000000;
  }
}

const sum = arr[N - 1].reduce((acc, cur) => {
    return (acc + cur) % 1000000000;
}, 0);

console.log(sum);