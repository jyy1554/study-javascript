// https://programmers.co.kr/learn/courses/30/lessons/49993

// 스킬 트리

function solution(skill, skill_trees) {
    var answer = 0;
    
    for (let i=0; i < skill_trees.length; i++) {
        let index = -1;
        
        for (let j=0; j < skill_trees[i].length; j++) {
            const new_index = skill.indexOf(skill_trees[i][j]);
            if (new_index == -1) continue;
            else if (index < new_index) index = new_index;
            else {
                index = -1;
                break;
            }
        }
        
        console.log(index);
        
        answer = index != -1 ? (answer + 1) : answer;
    }
    
    return answer;
}