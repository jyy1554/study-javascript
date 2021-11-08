// https://www.acmicpc.net/problem/11727

// 2×n 타일링 2 (DP 예제)

const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString();

let dp = [0, 1, 3];   // N = 1일때 1이며, N = 2일때 3

for (let i=3; i <= N; i++) {
    dp[i] = (dp[i-1] + 2 * dp[i-2]) % 10007; // dp가 너무 커져버리면 overflow 발생하므로
}

console.log(dp[N]);