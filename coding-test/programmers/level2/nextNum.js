// https://programmers.co.kr/learn/courses/30/lessons/12911

// 다음 큰 숫자

function binary(n) {
  let bi = '';
  
  while(n) {
      bi = (n % 2) + bi;
      n = Math.floor(n/2);
  }
  
  return bi;
}

function solution(n) {
  const count = (arr) => arr.split('').reduce((acc, cur) => acc += +cur,0);
  const bi_origin = binary(n);
  const n_num = count(bi_origin);
  
  do {
      n++;
      const bi_next = binary(n);
      if (n_num == count(bi_next)) break;
  } while(n)
  
  return n;
}


/* N진법으로 바꿔주는 메소드를 사용할 경우 */
function solution(n) {
    const count = (arr) => arr.split('').reduce((acc, cur) => acc += +cur,0);
    const bi_origin = n.toString(2);
    const n_num = count(bi_origin);
    
    do {
        n++;
        const bi_next = n.toString(2);
        if (n_num == count(bi_next)) break;
    } while(n)
    
    return n;
}