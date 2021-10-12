const $secondHand = document.querySelector('.second-hand');
const $minuteHand = document.querySelector('.minute-hand');
const $hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  if(seconds === 0) $secondHand.classList.add('bypass');
  if(seconds === 1) $secondHand.classList.remove('bypass');
  const secondsDegrees = ((seconds / 60) * 360) + 90; // default가 -90도 이므로
  $secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  if(minutes === 0) $minuteHand.classList.add('bypass');
  if(minutes === 1) $minuteHand.classList.remove('bypass');
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  $minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  $hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // 1초마다 setDate 함수 수행
