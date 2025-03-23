/**
 * Getter and Setter
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * Getter의 역할
     * 
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear() { //함수처럼 정의했지만 key값처럼 다룸
        return `${this.name}-${this.year}`;
    }

    // Setter는 무조건 parameter를 하나 받음
    // setter 이름은 보통 프로퍼티와 동일하게 지음
    // Setter를 잘 쓰지 않긴함
    set name(name) {
        this.name = name;   // 인스턴스의 name에 name을 저장
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); //object의 하나의 키 값처럼 이용할 수 있음. nameAndYear() 이렇게 쓰면 안됨 에러발생함

yuJin.name = '장원영';
console.log(yuJin); // IdolModel { name: '장원영', year: 2003 }
console.log('---------');

class IdolModel2 {
    #name;  // private 값 정의 시 앞에 #을 붙임(ES7 엔진부터 사용 가능). private값은 외부에서 접근이 불가능. 그러나 getter를 사용하면 private한 값을 가져올 수 있음
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    // getter를 사용하면 private한 값을 가져올 수 있음 (Getter의 진가)
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 }
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name); // 코드팩토리