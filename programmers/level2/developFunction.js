// https://programmers.co.kr/learn/courses/30/lessons/42586#

//기능 개발


function solution(progresses, speeds) {
    var answer = [];
    let remains = [];   // 작업 남은 일수 저장
    let count = 0;
    let remain = 0; //남은 작업일
    
    // 각 배포마다 몇 개의 기능이 배포되는지를 return
    // [7, 2, 9] => 뒤에가 자기자신보다 작으면 같이 ㄱㄱ, 크면 끊음=> 2, 1
    // [5, 10, 1, 1, 20, 1] => => [1, 3, 2]
    
    remains = progresses.map((v, i) => {
        //나누어 떨어지면
        if ((100-v) % speeds[i] == 0) return (100-v) / speeds[i];
        //나누어 떨어지지 않으면 올림
        else return Math.ceil((100-v)/speeds[i]);
    });
    console.log(remains);
    
    for (let i=0; i < remains.length; i++) {
        if (i == 0) {
            remain = remains[i];
            count++;
        }
        else if (remain < remains[i]) {
            answer.push(count);
            remain = remains[i];
            count = 1;
        }
        else {
            count++;
        }
        
        if (i == (remains.length-1)) answer.push(count);
    }
    
    return answer;
}