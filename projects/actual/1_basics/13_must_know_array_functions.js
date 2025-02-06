/**
 * Array Methods
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

// push()
// 원래 array가 변경됨
console.log(iveMembers.push('코드팩토리')); // push라는 함수는 과연 리턴값이 있을까? 있다! 7이 출력됨. array size (추가한 다음의 길이)
console.log(iveMembers);
console.log('------------');

console.log(iveMembers.pop());
console.log(iveMembers);
console.log('------------');

// shift() : 첫번째 값을 반환받음 (원래 array가 변경됨)
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('------------');

// unshift() : 첫번째로 값을 넣음 (원래 array가 변경됨)
console.log(iveMembers.unshift('안유진'));  // array size가 반환됨
console.log(iveMembers);
console.log('------------');

// splice() : 어느 인덱스부터 몇개를 삭제하고 싶은지 (원래 array가 변경됨)
console.log(iveMembers.splice(0,3)); //삭제되는 값들을 반환
console.log(iveMembers);
console.log('------------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);

//concat() : 새로운 array를 반환 (기존 array 변경 안됨)
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers); //변경없음
console.log('------------');

//slice() : 어느 인덱스부터 어느 인덱스 "미만"까지 삭제 (기존 array 변경 안됨)
console.log(iveMembers.slice(0, 3)); // [ '안유진', '가을', '레이' ] 반환됨
console.log(iveMembers); //변경없음
console.log('------------');

//spread operator
let iveMembers2 = [
    ...iveMembers
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);
console.log('------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); //true

console.log([
    ...iveMembers,
] === iveMembers); //false
console.log('------------');

// join() : string으로 반환. default는 컴마를 기준으로 모든 값을 합침
console.log(typeof iveMembers.join());
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서
console.log('------------');

// sort()
// 오름차순
iveMembers.sort(); //반환값이 없음
console.log(iveMembers); // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]

console.log(iveMembers.reverse()); //반환값이 있음
console.log('------------');

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

/**
 * a, b를 비교했을때
 * 
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
})
console.log(numbers); // 오름차순. [ 1, 3, 5, 7, 9 ]

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); // 내림차순. [ 9, 7, 5, 3, 1 ]
console.log('------------');

// map() : 모든 값을 순회
// 새로운 aray를 반환
console.log(iveMembers.map((x) => x)); //그대로 나옴
console.log(iveMembers.map((x) => `아이브 : ${x}`)); //['아이브 : 장원영', '아이브 : 이서', ...]

console.log(iveMembers.map((x) => {
    if(x === '안유진') {
        return `아이브 : ${x}`;
    } else {
        return x;
    }
}));
console.log('------------');

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true)); //[ 1, 8, 7, 6, 3 ]
console.log(numbers.filter((x) => x % 2 === 0)); //[8, 6]
console.log('------------');

// find()
// 하나씩 보다가 조건에 맞는 하나의 값만 반환
console.log(numbers.find((x) => x % 2 === 0)); //8

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); //1
console.log('------------');

// reduce()
// p : previous, n : next
// reduce(콜백함수, 초기값);
console.log(numbers.reduce((p, n) => p + n, 0)); // array에 있는 모든 값을 더하는. 초기값이 첫 p로 들어가고, 첫 n이 array의 첫번째 값이 됨
