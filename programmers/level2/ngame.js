function solution(n, t, m, p) {
    var answer = '';
    let arr = [];
    
    //진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
    // 2명 2번째 01[2(p)*1(t)-1]01[2*2-1]01[2*3-1]
    
    for (let i=0; i <= p*t; i++) {
        const a = i.toString(n).split('');
        for (let j=0; j < a.length; j++) {
            arr.push(a[i]);
        }
    }
    console.log(arr);
    
    return answer;
}