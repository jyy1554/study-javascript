const $inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // this.dataset.sizing은 우리가 data attribute로 정해준 data-sizing을 의미
  const suffix = this.dataset.sizing || ''; //base의 경우, data-sizing을 정해주지 않았으므로 ''일때도 있어야함
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// change 이벤트로도 listen이 가능하나, 마우스를 놓았을때만 값이 변경됨
// mouseover 이벤트로도 가능하나, color값이 바뀔때마다 즉시 바뀌지는 않음
// input 이벤트는 change 이벤트와는 달리 value 속성이 바뀔 시마다 반드시 일어난다.
$inputs.forEach(input => input.addEventListener('input', handleUpdate));