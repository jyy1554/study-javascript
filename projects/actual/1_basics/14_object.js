/**
 * Object 객체
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function() { // object 안에 함수가 있으면 method라고 부름
        return `${this.name}이 춤을 춥니다.`; //대부분의 객체지향 프로그래밍 언어에서는 this라는 키워드를 가지고 있음
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance()); //함수는 실행해야 반환값을 받을 수 있었어 괄호가 있어야함
console.log('------------');

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function() {
        return `${this.name}이 춤을 춥니다.`;
    },
};

console.log(yuJin2);
console.log(yuJin2.dance());

// 수정 가능
yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

// 없는 key를 넣으면 새로 생성됨
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

// key 삭제
delete yuJin2['englishName'];
console.log(yuJin2);
console.log('------------');

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우, 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 없다.
 */
const wonYoung = {
    name : '장원영',
    group : '아이브',
};
console.log(wonYoung);

// 에러 발생 - const로 선언한 객체의 1번 특징 (wonYoung은 const로 선언했으므로)
//wonYoung = {};

// const로 선언한 객체의 2번 특징
wonYoung['group'] = '코드팩토리';
console.log(wonYoung);
console.log('------------');

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung));
console.log(Object.values(wonYoung));

// 객체를 쉽게 선언하는 새로운 문법
const name = '안유진';
const yuJin3 = {
    name,   // name: name, 이렇게 작성한 것과 동일
};
console.log(yuJin3);