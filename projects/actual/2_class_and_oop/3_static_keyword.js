/**
 * Static Keyword
 */
class IdolModel {
    name;
    year;
    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {  // static keyword를 쓴 함수
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(IdolModel.groupName);   // static keyword는 인스턴스가 아닌 클래스 자체에 귀속되기 때문에 new keyword를 쓸 필요가 없다.
console.log(IdolModel.returnGroupName());   // 함수로 실행해야됨
console.log('-----------');

/**
 * factory constructor
 */
class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // 어떤 데이터를 입력받아 인스턴스를 만들건지 템플릿화해서 정의 가능
    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    static fromList(list) {
        return new IdolModel2(
            list[0],
            list[1],
        );
    }
}

// new 키워드를 쓰지않고도 인스턴스를 만듦
const yuJin2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel2.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);