/**
 * Callback
 */
function waitAndRun() {
    setTimeout(() => {  //setTimeout안에 있는 함수가 콜백 함수
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(() => {
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}

// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// timeoutPromise.then((res) => {  // resolve가 실행이 되면 then이 실행됨
//     console.log('---then---');
//     console.log(res);
// });

// Promise의 진가가 나타나는 예제
const getPromsie = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});

// getPromsie(3)
//     .then((res) => { //res는 response를 의미
//         console.log('--- first then ---');
//         console.log(res);

//         return getPromsie(3);
//     }).then((res) => {
//         console.log('--- second then ---');
//         console.log(res);

//         return getPromsie(3);
//     }).then((res) => {
//         console.log('--- third then ---');
//         console.log(res);

//         return getPromsie(3);
//     });

//////////////////////

// reject 예제

const getPromsie2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('에러');
    }, seconds);
});

// getPromsie2(3)
//     .then((res) => { // resolve를 실행하면 then을 실행시키고
//         console.log('--- first then ---');
//         console.log(res);

//         return getPromsie2(3);
//     })
//     .catch((res) => { // reject를 실행하면 catch를 실행시킴
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(() => { // then이 걸렸던 catch가 걸렸던 무조건 실행됨
//         console.log('--- finally ---');
//     });

Promise.all([   // 아래 promise들을 동시에 실행. 실행한 순서대로 응답이 입력됨 -> 가장 느린 함수 기준으로 then 또는 catch가 불린다.
    getPromsie(1),
    getPromsie(4),
    getPromsie(1),
]).then((res) => {  // Promise들을 하나의 then으로 묶을 수 있음
    console.log(res);
}); // [ '완료', '완료', '완료' ]