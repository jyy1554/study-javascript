// https://www.acmicpc.net/problem/1463

// 1로 만들기

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

const dp = [0, 0];    // 인덱스를 맞추고 n이 1일때 횟수는 0이므로 미리 넣어줌

for (let i=2; i <= input; i++) {
  let [a,b,c] = [9999999, 9999999, 9999999999999]; // a,b,c를 충분히 큰 값으로 셋팅한다. 이후에 최솟값을 뽑아낼 예정이므로

  if (i % 3 == 0) a = dp[Math.floor(i/3)];
  if (i % 2 == 0) b = dp[Math.floor(i/2)];
  c = dp[i-1];
  
  dp[i] = Math.min(a, b, c)+1;
}

console.log(dp[input]);