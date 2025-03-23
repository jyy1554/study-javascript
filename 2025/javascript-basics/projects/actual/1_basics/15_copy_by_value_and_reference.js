/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다. (Object(object, function, array)를 제외하고 모든 data type은 primitive다.)
 * 2) 객체는 copy by reference다.
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진입니다.';

console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요 안유진입니다.
console.log('------------');

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '코드팩토리';

console.log(originalObj);   // { name: '안유진', group: '코드팩토리' }
console.log(cloneObj);  // { name: '안유진', group: '코드팩토리' }

console.log(originalObj === cloneObj); // true
console.log(original === clone); // false
console.log('------------');

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj); // false
console.log('------------');

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
};

console.log(yuJin1 === yuJin2); // true (copy by reference에 의해서 같은 메모리 공간을 참조하기 때문에 true)
console.log(yuJin1 === yuJin3); // false (값은 같지만, 서로 다른 메모리 공간을 참조하고 있기 때문에 false입니다.)
console.log(yuJin2 === yuJin3); // false
console.log('------------');

/**
 * Spread Operator
 */
const yuJin4 = {
    ...yuJin3,
}; // 이것은 copy by value가 된다. (새로 선언을 했기 때문에 서로 다른 메모리 공간을 가리키고 있음)
console.log(yuJin4);
console.log(yuJin4 === yuJin3); // false
console.log('------------');

const yuJin5 = {
    year: 2003,
    ...yuJin3,
}
console.log(yuJin5); // { year: 2003, name: '안유진', group: '아이브' }
console.log('------------');

// Spread operator는 순서가 굉장히 중요함
const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6); // { name: '안유진', group: '아이브' }

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7); // { name: '안유진', group: '아이브' }