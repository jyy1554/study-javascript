// https://www.acmicpc.net/problem/10844

// 쉬운 계단 수

const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString();

const dp = [0, 9];

for (let i=2; i <= N; i++) {
  dp[i] = (dp[i-1] * 2 - (i-1)) % 1,000,000,000;
}

console.log(dp[N]);