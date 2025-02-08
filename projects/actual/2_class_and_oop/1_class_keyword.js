/**
 * Class Keyword
 */
// class를 선언
class IdolModel{    // class 이름은 항상 대문자로 시작
    name;    // 기본값 넣어줘도 되긴함
    year;   // 이것을 프로퍼티(property)라고 부름

    // constructor - 생성자
    constructor(name, year) {
        this.name = name;   //this는 현재 인스턴스를 의미. this.name의 name은 저 위의 name을 의미 (IdolModel 아래 있는..)
        this.year = year;
    }

    sayName() {
        return `안녕하세요. 저는 ${this.name}입니다.`
    }
}

const yuJin = new IdolModel();
console.log(yuJin); // IdolModel { name: undefined, year: undefined }  객체로 나옴

const yuJin2 = new IdolModel('안유진', '2003');
console.log(yuJin2); // IdolModel { name: '안유진', year: '2003' }

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

console.log(yuJin2.name);
console.log(yuJin2.year);

console.log(yuJin2.sayName());
console.log(gaeul.sayName());
console.log('----------');

console.log(typeof IdolModel); // function (class는 함수다.)
console.log(typeof yuJin2); // object (class로 생성한 인스턴스는 객체다.)
console.log('----------');

class IdolModel2 {
    // 사실 JS는 class에서 프로퍼티를 맨처음 정의하는것이 필수는 아니나,
    // 좋은 개발자가 되기 위해서는 미리 필요한 프로퍼티를 정의해주는 것이 좋다.

    constructor(name, year) {
        this.name = name;   //this는 현재 인스턴스를 의미. this.name의 name은 저 위의 name을 의미 (IdolModel 아래 있는..)
        this.year = year;
    }
}

const yuJin3 = new IdolModel2('안유진', '2003');
console.log(yuJin3); // IdolModel { name: '안유진', year: '2003' }

const gaeul2 = new IdolModel2('가을', 2002);
console.log(gaeul);

console.log(yuJin3.name);
console.log(yuJin3.year);
console.log('----------');