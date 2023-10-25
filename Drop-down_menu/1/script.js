const menuContainer = document.querySelector('.menu-container');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  menuContainer.classList.toggle('active-drop');
  console.log('clicked');
});
