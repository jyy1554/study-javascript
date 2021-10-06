// https://programmers.co.kr/learn/courses/30/lessons/12906

// 같은 숫자는 싫어


function solution(arr)
{
    var answer = [];

    for(let i=0; i < arr.length; i++) {
        if(!answer.length) answer.push(arr[i]);
        else if(answer[answer.length-1] != arr[i]) answer.push(arr[i]);
    }
    
    return answer;
}