/**
 * Async theory
 * 
 * JS Runtime이 실행되는 순간 Event Loop가 생성됨
 * 비동기 함수가 실행이 되면 Call Stack에 있다가, Event Loop에 의해 Task Queue(Event Queue)로 옮겨짐
 * 여기서 종료가 된 함수가 있는지 확인하고 Call stack이 비어져 있으면, Event Loop가 Queue에 종료된 함수를 Call Stack으로 옮김
 */
// // Sync programming 예제

// function longWork() {
//     const now = new Date();


//     /**
//      * milliseconds since epoch
//      * 
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while (new Date().getTime() < afterTwoSeconds) {

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World'); // Hello -> 완료 -> World 

// Async programming 예제

function longWork() {
    setTimeout(() => {
        console.log('완료');
    }, 2000); // 비동기로 동작하는 함수. 몇 milli초후에 해당함수를 실행할 것인가
}

console.log('Hello');
longWork();
console.log('World'); // Hello -> World -> 완료