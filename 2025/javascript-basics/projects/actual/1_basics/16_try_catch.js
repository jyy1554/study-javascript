/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner() {
    try {   // 에러를 잡고 싶은 코드를 try안에 넣는다.
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!'); // 에러를 던짐. 다음 코드가 실행이 안됨

        console.log('Code Factory');
    } catch(e) { // try에서 에러가 발생하면 아래를 실행
        console.log('---catch---');
        console.log(e);
    } finally { // try에서 에러가 발생하든 말든 항상 실행 (필수아님. optional)
        console.log('---finally---');
    }
};
runner();