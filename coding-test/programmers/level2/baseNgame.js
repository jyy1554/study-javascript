function solution(n, t, m, p) {
  let answer = '';
  let arr = [];
  
  for (let i=0; i <= t*m; i++) {
      const a = i.toString(n).toUpperCase().split('');
      for (let j=0; j < a.length; j++) {
          arr.push(a[j]);
      }
  }
  
  for (let i=0; i < t; i++) {
      answer += arr[(m*i) + (p-1)];
  }
  
  return answer;
}