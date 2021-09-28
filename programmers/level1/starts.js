// https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

// 직사각형 별찍기


/* 풀이1. for loop 사용 */
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let  answer = '';
    
    for (let i=0; i < b; i++) {
        for (let j=0; j < a; j++) {
            answer += '*';
        }
        answer += '\n';
    }
    
    console.log(answer);
});

/* 풀이2. repeat 함수 사용 */
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const stars = '*'.repeat(a);
    const answer = (stars+'\n').repeat(b);
    
    console.log(answer);
});