function playSound(e) {
  // querySelector로 data attribute 선택하는 방법
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //select corresponding key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if(!audio) return;

  // 이전에 keydown한 키가 또 눌릴 경우, audio를 되감기하여 처음부터 다시 들려주기 위해
  // 아래 코드를 안써주면 전에 플레이된 오디오가 끝날때까지 소리가 나지 않음
  audio.currentTime = 0;
  audio.play();
  //key에 해당하는 박스 스타일을 바꿔주려고
  key.classList.add('playing');
}


// when the transition has to end
// 키가 눌릴때마다 인식. addEventListenger는 배열(keys)을 모두 인식할 수 없어 forEach 사용
function removeTransition(e) {
  // 가장 마지막 transition이 transform이므로
  if(e.propertyName !== 'transform') return;  //skip it if it's not a transform
  this.classList.remove('playing'); //this는 자신을 호출한 놈. 궁금하면 console.log(this); 해보기
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
