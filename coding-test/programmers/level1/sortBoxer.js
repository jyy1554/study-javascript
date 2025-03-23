// https://programmers.co.kr/learn/courses/30/lessons/85002

//6주차_복서 정렬하기


function solution(weights, h2h) {
    let answer = [];
    const rank = [];    // 승률을 담는 배열
    const defeatHeavier = []; // 자신보다 무거운 선수를 이긴 횟수를 담는 배열
    
    
    // 1. 승률 계산
    for (let i=0; i < h2h.length; i++) {
        answer.push(i); 
        
        rank[i] = h2h[i].split('').filter(v => v == 'W').length 
                / h2h[i].split('').filter(v => v != 'N').length || 0;
    }    
    
    // 2. 자신보다 무거운 복서를 이긴 횟수 구하기
    for (let i=0; i < h2h.length; i++) { 
        defeatHeavier[i] = h2h[i].split('').reduce((acc, cur, index) => {
            if (cur == "W" && weights[i] < weights[index]) acc++;
            return acc;
        }, 0);
    }
    
    
    
    answer.sort((a,b) => {
        if(rank[a] != rank[b]) return rank[b] - rank[a];
        else if(defeatHeavier[a] != defeatHeavier[b]) return defeatHeavier[b] - defeatHeavier[a];
        else if(weights[a] != weights[b]) return weights[b] - weights[a];
        else return a-b;
    });
    
    answer = answer.map(v => v+1);
    
    return answer;
}