/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  ex) getter와 setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name')); // { value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부. for...in 룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. 
 *                   false일 경우, 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 
 *                   단, writable이 true인 경우, 값 변경과 writable을 변경하는 건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name')); 
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    year: 2003,

    // Getter선언
    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;    // Setter 실행
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age')); // 액세서 프로퍼티는 value가 존재하지 않음

yuJin2.height = 172;
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 172, writable: true, enumerable: true, configurable: true }

// definProperty를 사용하면 프로퍼티 어트리뷰트를 설정할 수 있다.
Object.defineProperty(yuJin2, 'height2', {
    value: 172,
    writable: true, // 이것들 안쓰면 false가 기본값 
    enumerable: true,
    configurable: true,
});

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height2'));

yuJin2.height2 = 180;
console.log(yuJin2);
console.log('---------');

/**
 * Writable
 */
Object.defineProperty(yuJin2, 'height2', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height2'));

yuJin2.height2 = 172;   //에러는 나지않으나 값이 안바뀜
console.log(yuJin2);
console.log('---------');

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));   // [ 'name', 'year', 'age', 'height', 'height2' ]
for (let key in yuJin2) {
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log(Object.keys(yuJin2));   // [ 'year', 'age', 'height', 'height2' ]

for (let key in yuJin2) {
    console.log(key);
}

console.log(yuJin2);    // { year: 1993, age: [Getter/Setter], height: 172, height2: 180 }
console.log(yuJin2.name);   // name은 열거만 불가. 값을 확인하면 잘 나옴
console.log('---------');

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height2', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height2'));

// Object.defineProperty(yuJin2, 'height2', {  //에러남. 왜냐하면 configurable을 false로 해놓았기 때문에
//     enumerable: false,
// });

// configurable이 false더라도 writable이 true이면 값 변경이 잘됨
Object.defineProperty(yuJin2, 'height2', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height2'));    // 172로 변경잘됨

// configurable이 false더라도 writable을 false로 변경 가능함
Object.defineProperty(yuJin2, 'height2', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height2')); // { value: 172, writable: false, enumerable: true, configurable: false }

// 그러나,, writable을 false -> true로 변경을 불가능함. 에러 발생
Object.defineProperty(yuJin2, 'height2', {
    writable: true,
});