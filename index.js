// 클릭할때마다 class name을 add해야됨

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  // toggle은 class 유무를 체크해서 없으면 add, 있으면 remove를 자동으로 시켜줌
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);  // 어떤 transition이 일어나나 확인하기 위해
  if(e.propertyName === 'font-size') this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
