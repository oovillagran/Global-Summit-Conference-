// hamburguer menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBarMenu = document.querySelector('.navbar-menu');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer-about');
const closeButton = document.createElement('button');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  closeButton.classList.add('xButton');
  navMenu.appendChild(closeButton);

  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBarMenu.classList.add('display');
  logo.classList.add('hidden');
  main.classList.toggle('active');
  footer.classList.toggle('active');
  body.classList.add('overFlow');
  const closeButtonAction = document.querySelector('.xButton');
  closeButtonAction.addEventListener('click', () => {
    window.location.reload();
  });
});

document.querySelectorAll('.link-menu').forEach((m) => m.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  main.classList.remove('active');
  footer.classList.remove('active');
  body.classList.remove('overFlow');
}));
