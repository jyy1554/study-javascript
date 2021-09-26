(function printNow() {
  const today = new Date();

  const dayNames = [
    '(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'
  ];

  const day = dayNames[today.getDay()];
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour < 12 ? 'AM' : 'PM';

  //12시간제로 변경
  hour %= 12;
  //hour가 0이면 12를 재할당
  hour = hour || 12;

  //10미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second}${ampm}`;

  console.log(now);

  //1초마다 printNow 함수를 재귀 호출
  setTimeout(printNow, 1000);
}());