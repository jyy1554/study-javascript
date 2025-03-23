const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const now = 1; // 1월 1일 월요일
const month = +input[0];
const day = +input[1];
let differ = 0; //1월 1일과의 차이를 나타내는 변수

//1월 1일과의 차이를 7로 나눴을 때 나머지가 0,1,...,6
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const mons = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //index가 1일 때 1월의 일수를 나타내기 위해 맨앞에 0추가

for (let i=1; i < month; i++) {
    differ += mons[i];
}

differ += (day - now);

console.log(days[differ % 7]);