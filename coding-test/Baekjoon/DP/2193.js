// https://www.acmicpc.net/problem/2193

// 이친수

// 1

// 10

// 100 10"1" : dp[3] = 1 + dp[1]

// 1000 100"1" 10"10" : dp[4] = 1+dp[1]+dp[2] = dp[3] + dp[2]

// 10000 1000"1" 100"10" 10"100" 10"101" : dp[5] = 1+dp[1]+dp[2]+dp[3] = dp[4] + dp[3]

// 100000  10000"1"  1000"10"  100"100"  100"101"  10"1000"  10"1001"  10"1010" : dp[6] = 1+dp[1]+dp[2]+dp[3]+dp[4] = dp[5] + dp[4]

// dp[N] = dp[N-1] + dp[N-2]

const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

const dp = new Array(N+1).fill(BigInt(0));
dp[1] = BigInt(1);

for (let i=2; i <= N; i++) {
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[N].toString());