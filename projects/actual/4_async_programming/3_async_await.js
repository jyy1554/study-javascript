/**
 * Async / Await
 */
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('완료');
        reject('에러');
    }, seconds * 1000);
});

// Promise를 then, catch 말고도 async, await으로도 비동기 프로그래밍을 할 수 있음
// 현대에 더 많이 쓰이는 비동기 프로그래밍 방법
async function runner() {
    try{
        const result1 = await getPromise(1); // thread가 막히지 않음. await은 Promise에만 쓸 수 있음
        console.log(result1);
        
        const result2 = await getPromise(2);
        console.log(result2);

        const result3 = await getPromise(3);
        console.log(result3);
    }catch(e){
        console.log('--- catch e ---');
        console.log(e);
    }finally{ // resolve이든 reject이든 항상 실행됨
        console.log('---finally---');
    }
}

runner();
console.log('실행 끝'); // 실행 끝 -> 완료