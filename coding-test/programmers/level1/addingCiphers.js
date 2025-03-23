// https://programmers.co.kr/learn/courses/30/lessons/12931

// 자릿수 더하기


function solution(n)
{
    var answer = 0;

    while (n) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }

    return answer;
}