/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP 강의에서
 * 3) function을 사용해서 객체 생성 - 생성자 함수 (오래된 라이브러리에서 많이 쓰므로 꼭 알아야함)
 */

//1번 방법
const yuJin = {
    name: '안유진',
    year: 2003,
}
console.log(yuJin);

//2번 방법
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003)); // IdolModel { name: '안유진', year: 2003 }

//3번 방법 : 생성자 함수 라고 부름
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('가을', 2002);   //this를 이용해서 property를 할당해준 경우에만 함수에서 new 키워드 사용 가능
console.log(gaEul); // IdolFunction { name: '가을', year: 2002 }