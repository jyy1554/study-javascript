// https://programmers.co.kr/learn/courses/30/lessons/17686

// [3차] 파일명 정렬

function solution(files) {
    let answer = files.filter(v => v);  // answer에 files의 요소들을 복사
    
    // 파일명에서 head 부분을 리턴하는 함수
    const head = file => {
        let text = '';
        for (let i=0; i < file.length; i++) {
            // 문자일 경우
            if (isNaN(+file[i])) text += file[i];
            else break;
        }
        return text;
    };
    // 파일명에서 number 부분을 리턴하는 함수
    const number = file => {
        const f = file.split(head(file))[1];
        let num = '';
        for (let i=0; i < f.length; i++) {
            // 문자일 경우 (0일때 숫자가 아닐때 조심하려고 문자부터 검사)
            if (isNaN(+f[i])) break;
            // 숫자일 경우
            else num += f[i];
        }
        return num;
    };
    
    
    answer.sort((a,b) => {
        // 대소문자 구별하지 않기 위해 toLowerCase() 메소드 이용
        if (head(a).toLowerCase() < head(b).toLowerCase()) return -1;
        else if (head(a).toLowerCase() > head(b).toLowerCase()) return 1;
        else if (number(a) - number(b) < 0) return -1;
        else if (number(a) - number(b) > 0) return 1;
        else if (files.indexOf(a) < files.indexOf(b)) return -1;
        else return 1;
    });
    
    
    return answer;
}