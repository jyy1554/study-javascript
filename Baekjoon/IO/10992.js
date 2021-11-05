// https://www.acmicpc.net/problem/10992

// 별 찍기 - 17

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

// 끝만 *로 꽉채워야됨

for (let i=1; i <= input; i++) {
    if (i === 1) console.log(' '.repeat(input-i) + '*');
    else if (i !== input) console.log(' '.repeat(input-i) + '*' + ' '.repeat(2*(i-1)-1) + '*');
    else console.log('*'.repeat(2*i-1));
}