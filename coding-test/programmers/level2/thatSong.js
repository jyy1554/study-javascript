// https://programmers.co.kr/learn/courses/30/lessons/17683

// [3차] 방금그곡

function solution(m, musicinfos) {
  let answer = '';
  let play = [];
  
  const duration = (start, end) => {
      return (end.split(":")[0] - start.split(":")[0]) * 60 + end.split(":")[1] - start.split(":")[1];
  };
  
  // 시간에 따라 멜로디 나열 (#있으면 앞에 붙이기)
  for (let i=0; i < musicinfos.length; i++) {
      const melodies = [];    // 악보 정보
      const musicinfo = musicinfos[i].split(","); // 곡 정보
      
      // 악보 정보를 배열로 나타낼거
      musicinfo[3].split("").forEach(v => {
          if (v === "#") melodies[melodies.length-1] += v;
          else melodies.push(v);
      });
      
      // 시간동안 플레이된 멜로디를 저장
      play[i] = '';
      for (let j=0; j < duration(musicinfo[0], musicinfo[1]); j++) {
          play[i] += melodies[j % melodies.length];
      }
  }
  
  console.log('멜로디들 : ', play);
  
  // includes 판단 => 둘다 includes일 경우, 먼저 입력된 음악 반환 => 없으면 (None) 반환
  // 재생된 시간이 제일 긴 음악 제목을 반환
  // -> 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환
  // -> 없을 경우 (None) 반환
  // C, C#, D, D#, E, F, F#, G, G#, A, A#, B
  
  let new_play = play.filter(v => v);
  new_play.sort((a,b) => {
      if (a.includes(m) && b.includes(m)) {
          if (a.length > b.length) return -1;
          else if (a.length < b.length) return 1;
          else if (play.indexOf(a) < play.indexOf(b)) return -1;
          else if (play.indexOf(a) > play.indexOf(b)) return 1;
      }
      else if (a.includes(m)) return -1;
      else if (b.includes(m)) return 1;
      else return '(None)';
  });
  
  console.log(new_play);
  
  
  return answer;
}