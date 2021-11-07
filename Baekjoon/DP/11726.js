// https://www.acmicpc.net/problem/11726

// 2×n 타일링

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();
let dp = [0, 1, 2];    //n과 인덱스 맞추기 위해

for (let i=3; i <= input; i++) {
    dp[i] = (dp[i-2] + dp[i-1]) % 10007;    //점화식, overflow가 나지 않도록 미리 10007로 나눔
}

console.log(dp[input]);