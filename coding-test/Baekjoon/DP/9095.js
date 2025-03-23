// https://www.acmicpc.net/problem/9095

// 1, 2, 3 더하기

// 1 : 1가지
// 2 : 1+1, 2 => 2가지
// 3 : 1+1+1, 1+2, 2+1, 3 => 4가지
// 4 : 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 3+1, 1+3, 4 => 7가지
// 5 : 1+1+1+1+1, 2+1+1+1, 1+2+1+1, 1+1+2+1, 1+1+1+2, 2+2+1, 2+1+2, 1+2+2, 
//     3+1+1, 1+3+1, 1+1+3, 3+2, 2+3 => 13가지
// 6: 1+1+1+1+1+1 - 1가지, 2+1+1+1+1 - 5가지, 2+2+1+1 - 6가지, 2+2+2 - 1가지, 3+1+1+1 - 4가지, 3+2+1 - 6가지, 3+3 - 1가지 
//    => 24가지

// 이전값들을 활용하여 다음 값을 계산하므로 dp
// dp[5] = dp[4]+dp[3]+dp[2];
// dp[6] = dp[5]+dp[4]+dp[3];

const fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString();

inputs = inputs.split("\n").map(v => parseInt(v));
const testNum = inputs.shift();    // 테스트 케이스 개수

let dp = [0,1,2,4]

for (let i=4; i < 11; i++) {        // n은 11보다 작은수라 했으므로.. (범위 안정해줬더니 에러남;;)
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

for (let i=0; i < testNum; i++) {
    console.log(dp[inputs[i]]);
}


