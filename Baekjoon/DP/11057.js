// https://www.acmicpc.net/problem/11057

// 오름막 수

//0으로 시작가능하며, 인접한 수가 같아도 오름차순으로 침

// N 1  2  3 4 ... 1000

// 0 1 10 55
// 1 1 9  45
// 2 1 8  36
// 3 1 7  28
// 4 1 6  21
// 5 1 5  15
// 6 1 4  10
// 7 1 3  6
// 8 1 2  3
// 9 1 1  1


const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString();

let pre = Array(10).fill(1);

for (let i=2; i <= N; i++) {
    const post = [];
    for (let j=0; j < 10; j++) {
        post[j] = pre.slice(j, 10).reduce((acc, cur) => acc+cur, 0) % 10007;
    }
    pre = post.map(v => v);
}

console.log(pre.reduce((acc, cur) => acc+cur, 0) % 10007);
