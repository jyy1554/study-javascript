// https://programmers.co.kr/learn/courses/30/lessons/17680

// [1차] 캐시

function solution(cacheSize, cities) {
  let time = 0;
  let cache = []; // 최대 길이는 cacheSize
  
  // cities : 배열 (영문자, 대소문자구별x, 공백x)
  // 가장 오래전에 사용했던 것들을 교체  -> 최근에 사용한것들을 맨뒤로 보낼끄
  // cache hit : 1 / cache miss : 5
  
  // 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력    
  for (let i=0; i < cities.length; i++) {
      const city = cities[i].toLowerCase();
      
      if (cache.includes(city)) {
          time += 1;
          cache.splice(cache.indexOf(city), 1);
      }
      else {
          time += 5;
          if (cache.length >= cacheSize) cache.shift();
      }
      
      cache.push(city);
  }
  
  return time;
}


// 5 + 5 + 5 + 1 1 1 1 1 1