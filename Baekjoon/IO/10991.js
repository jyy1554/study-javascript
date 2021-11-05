// https://www.acmicpc.net/problem/10991

// 별 찍기 - 16

const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString();

// 4
// *            =>  000*
// *공*         =>  00*공*
// *공*공*       => 0*공*공*
// *공*공*공*    => *공*공*공*

for(let i=1; i <= input; i++) {
    let stars = '* '.repeat(i);
    stars = ' '.repeat(input-i) + stars;
    
    console.log(stars);
}