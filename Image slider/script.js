const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const circles = document.querySelectorAll('.circle');
let i = 1;
const totalImages = 9;
let timer;

rightBtn.addEventListener('click', () => {
  i = (i % totalImages) + 1;
  document.querySelector('#p' + i).scrollIntoView();
  document.querySelector('#c' + i).classList.toggle('active');
  updateActiveCircle(i);
});

leftBtn.addEventListener('click', () => {
  i = ((i - 2 + totalImages) % totalImages) + 1;
  document.querySelector('#p' + i).scrollIntoView();
  updateActiveCircle(i);
});
circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    scrollImage(index + 1);
  });
});

function updateActiveCircle(index) {
  const circles = document.querySelectorAll('.circle');
  circles.forEach((circle) => {
    circle.classList.remove('active');
  });
  document.querySelector('#c' + index).classList.add('active');
}
function scrollImage(index) {
  i = index;
  document.querySelector('#p' + i).scrollIntoView();
  updateActiveCircle(i);
}
function resetTimer() {
  console.log(timer);
  clearInterval(timer);
  timer = setInterval(() => {
    i = (i % totalImages) + 1;
    scrollImage(i);
  }, 5000);
}
resetTimer();
