// https://programmers.co.kr/learn/courses/30/lessons/12980

// 점프와 순간 이동

function solution(n)
{
    let answer = 0;
    
    // 5: '5' -> 4 -> 2 -> '1' -> 0
    // 6 : 6 -> '3' -> 2 -> '1' -> 0   홀수가 나올때마다 +1
    // 5000 : 5000 -> 2500 -> 1250 -> '625' -> 624 -> 312 -> 156 -> 78 -> '39' -> 38 -> '19'
    //      -> 18 -> '9' -> 8 -> 4 -> 2 -> '1' -> 0
    
    while (n > 0) {
        if (n % 2 == 1) {
            n--;
            answer++;
        }
        else n /= 2;
    }
    
    return answer;
}