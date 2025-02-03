/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('------------');

for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log('------------');

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}
console.log('------------');

// *을 이용해서 6x6 정사각형을 출력해라
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);
console.log('------------');

/**
 * for...in
 * 
 * 키를 가져올 때 사용
 */
const yuJin = { //Object를 사용
    name : '안유진',
    year : 2003,
    group : '아이브',
}

for (let key in yuJin) {
    console.log(key);
}

console.log('------------');

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for (let key in iveMembersArray) {
    console.log(key);   //index가 출력됨
    console.log(`${key}:${iveMembersArray[key]}`)
}

console.log('------------');

/**
 * for...of
 * 
 * List (Array)에서 사용 가능
 * 값을 가져올때 사용
 */
for (let value of iveMembersArray) {
    console.log(value);
}

console.log('------------');

/**
 * While
 */
let number = 0;

while (number < 10) {
    number++;
}

console.log(number);

console.log('------------');

/**
 * do...while
 * 
 * 선임한테 뒷통수 맞으니 사용하지 마시오
 */
number = 0;

do {
    number++;    
} while (number < 10);

console.log(number);

console.log('------------');

/**
 * break
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('------------');

number = 0;

while (number < 10) {
    if (number === 5) {
        break;
    }

    number++;
    console.log(number);
}

console.log('------------');

/**
 * continue
 * 
 * 계속 하는 것이 아닌 현재 진행하고 있는 loop을 스킵함
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;  
        console.log('hello');
    }
    console.log(i);
} // 결과 : 1 2 3 4 6 7 8 9 (5랑 hello 안나옴)

console.log('------------');

number = 0;

while (number < 10) {
    number++;

    if (number === 5) {
        continue;
    }

    console.log(number);
}
// 1 2 3 4 6 7 8 9 10