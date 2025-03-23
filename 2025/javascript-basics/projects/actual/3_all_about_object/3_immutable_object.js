/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - this.year;
    }
}

console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * Extensible
 * 
 *  확장 가능여부
 */
console.log(Object.isExtensible(yuJin));    // // Object의 static method를 실행. true

yuJin['position'] = 'vocal';
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

Object.preventExtensions(yuJin);    // Object의 static method를 실행
console.log(Object.isExtensible(yuJin));   // false

yuJin['groupName'] = '아이브'; // 에러가 발생하진 않으나
console.log(yuJin); // 값을 추가할 순 없음 { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

delete yuJin['position']; // 삭제는 가능
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] }
console.log('-------------');

/**
 * Seal
 * 
 * 봉인한다.
 * configurable을 false로 만드는 것과 동일함 (값 변경이 가능(writable: true)하나, key 삭제와 추가가 불가능)
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));   // false

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));   // true

yuJin2['groupName'] = '아이브'; // 에러가 발생하진 않으나
console.log(yuJin2);    // 값이 안바뀜 { name: '안유진', year: 2003, age: [Getter/Setter] }

delete yuJin2['name'];  // 에러가 나진 않으나
console.log(yuJin2);    //값이 안바뀜

Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));   // 예상대로 값이 바뀜. 대신 Seal을 했기 때문에 configurable: false 임

Object.defineProperty(yuJin2, 'name', {
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));   // writable도 변경됨
console.log('-------------');

/**
 * Freezed
 * 
 * 아예 동결시킴
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));   // false

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));   // true

yuJin3['groupName'] = '아이브';
console.log(yuJin3);    // 변경안됨

delete yuJin3['name'];
console.log(yuJin3);    // 변경안됨

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// }); // 에러 발생. TypeError: Cannot redefine property: name

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));   // value: '안유진', writable: false, enumerable: true, configurable: false
console.log('-------------');

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: { // Object안에 object를 넣음
        name: '장원영',
        year: 2002,
    }
}
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));   // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false로 나옴. 상위 오브젝트를 frozen한다해서 하위 오브젝트까지 frozen되는건 아님